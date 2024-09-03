import {Resolvers} from '#graphql/resolver';
import {typeDefs} from '#graphql/schema';
import {ApolloServer} from '@apollo/server';
import {defineGraphqlWebSocket, startServerAndCreateH3Handler} from '@as-integrations/h3';
import {WebSocketServer} from 'ws';
import {useServer} from 'graphql-ws/lib/use/ws';
import {createServer} from 'http';
import {PubSub} from 'graphql-subscriptions';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {userSchema} from "~/server/models/user.schema";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const pubsub = new PubSub();
const MED_UPDATED = 'MED_UPDATED';
const MED_CREATED = 'MED_CREATED';
const config = useRuntimeConfig();




// Your existing resolvers
const resolvers: Resolvers = {
    Query: {
        meds: async (_, { searchTerm }) => {
            try {
                let filter = {};
                if (searchTerm) {
                    filter = {
                        $or: [
                            { name: { $regex: searchTerm, $options: 'i' } },
                            { genericFor: { $regex: searchTerm, $options: 'i' } }
                        ]
                    };
                }
                return await medSchema.find(filter);
            } catch (error) {
                throw new Error('Error fetching meds');
            }
        },
        med: async (_, {id}) => {
            try {
                return await medSchema.findById(id);
            } catch (error) {
                throw new Error('Error fetching med');
            }
        },
        currentUser: async (_, __, context) => {
            console.log('Full context:', JSON.stringify(context, null, 2));

            let req;
            if (context.event && context.event.event && context.event.event.node) {
                req = context.event.event.node.req;
            } else if (context.event && context.event.node) {
                req = context.event.node.req;
            } else if (context.req) {
                req = context.req;
            }

            if (!req) {
                console.warn('Request object not available in context');
                return null;
            }

            console.log('Request headers:', req.headers);

            let token;

            // Parse cookies from request headers
            const cookies = parseCookies(req);
            token = cookies['auth-token'];

            if (!token) {
                console.debug('No auth token found in cookies');
                return null;
            }

            try {
                const decoded = jwt.verify(token, config.jwtSecret);
                const user = await userSchema.findById(decoded.userId);
                if (!user) {
                    console.warn('User not found for decoded token');
                    return null;
                }
                return user;
            } catch (error) {
                console.error('Error verifying token or fetching user:', error);
                return null;
            }
        },

    },
    Mutation: {
        createMed: async (_, args) => {
            try {
                const med = new medSchema(args);
                await med.save();
                await pubsub.publish(MED_CREATED, {medCreated: med});
                return med;
            } catch (error) {
                throw new Error('Error creating med');
            }
        },
        updateMed: async (_, {id, ...updateArgs}) => {
            try {
                const updatedMed = await medSchema.findByIdAndUpdate(id, updateArgs, {new: true});
                await pubsub.publish(MED_UPDATED, {medUpdated: updatedMed});
                return updatedMed;
            } catch (error) {
                throw new Error('Error updating med');
            }
        },
        deleteMed: async (_, {id}) => {
            try {
                return await medSchema.findByIdAndDelete(id);
            } catch (error) {
                throw new Error('Error deleting med');
            }
        },
        signup: async (_, {email, password}) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new userSchema({email, password: hashedPassword});
            console.log(email)
            await user.save();
            return user;
        },
        login: async (_, { email, password }, context) => {
            const user = await userSchema.findOne({ email });
            if (!user) throw new Error('User not found');

            const valid = await bcrypt.compare(password, user.password);
            if (!valid) throw new Error('Invalid password');

            const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '7d' });

            let res;
            if (context.event && context.event.event && context.event.event.node) {
                res = context.event.event.node.res;
            } else if (context.event && context.event.node) {
                res = context.event.node.res;
            } else if (context.res) {
                res = context.res;
            }

            if (res && typeof res.setHeader === 'function') {
                res.setHeader('Set-Cookie', `auth-token=${token}; HttpOnly; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''} Path=/`);
            } else {
                console.warn('Unable to set cookie: Response object not available');
            }

            // Ensure all non-nullable fields are returned
            return {
                id: user._id.toString(), // Convert ObjectId to string if necessary
                email: user.email,
                // Include other non-nullable fields from your User type
                token // Include the token in the response
            };
        },
    },
    Subscription: {
        medUpdated: {
            subscribe: () => pubsub.asyncIterator([MED_UPDATED]),
        },
        medCreated: {
            subscribe: () => pubsub.asyncIterator([MED_CREATED]),
        },
    },
};

// Create the schema with subscriptions
const schema = makeExecutableSchema({typeDefs, resolvers});

const httpServer = createServer();
const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
});

const serverCleanup = useServer({schema}, wsServer);

const apollo = new ApolloServer({
    schema,
    plugins: [{
        async serverWillStart() {
            return {
                async drainServer() {
                    serverCleanup.dispose();
                },
            };
        },
    }],
    context: ({event}) => {
        // H3 event object contains both req and res
        return {req: event.node.req, res: event.node.res};
    },
});

function parseCookies(req) {
    const list = {};
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader) return list;

    cookieHeader.split(';').forEach(cookie => {
        let [name, ...rest] = cookie.split('=');
        name = name.trim();
        if (!name) return;
        const value = rest.join('=').trim();
        if (!value) return;
        list[name] = decodeURIComponent(value);
    });

    return list;
}


export default startServerAndCreateH3Handler(apollo, {
    websocket: {
        ...defineGraphqlWebSocket({schema}),
        error(peer, error) {
            console.error('[ws] error', peer, error)
            // In a real app, you would want to properly log this error
        },
        // For debugging:
        // message(peer, message) {
        //   console.error('[ws] message', peer, message)
        // },
        // open(peer) {
        //   console.error('[ws] open', peer)
        // },
        // upgrade(req) {
        //   console.error('[ws] upgrade', req)
        // },
        // close(peer, details) {
        //   console.error('[ws] close', peer, details)
        // }
    },
    // Optional: Specify context
    //@ts-ignore
    context: (event) => ({event}),
});

// Start the HTTP server with WebSocket enabled
httpServer.listen(4000, () => {
    // console.log('Server is now running on http://localhost:4000/graphql');
});
