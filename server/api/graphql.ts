import { Resolvers } from '#graphql/resolver';
import { typeDefs } from '#graphql/schema';
import { ApolloServer } from '@apollo/server';
import {defineGraphqlWebSocket, startServerAndCreateH3Handler} from '@as-integrations/h3';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'http';
import { PubSub } from 'graphql-subscriptions';
import { makeExecutableSchema } from '@graphql-tools/schema';

const pubsub = new PubSub();
const MED_UPDATED = 'MED_UPDATED';
const MED_CREATED = 'MED_CREATED';


// Your existing resolvers
const resolvers: Resolvers = {
    Query: {
        meds: async (_, { name }) => {
            try {
                const filter = name ? { name: { $regex: name, $options: 'i' } } : {}; // Case-insensitive partial match
                // console.log(filter);
                return await medSchema.find(filter);
            } catch (error) {
                throw new Error('Error fetching meds');
            }
        },
        med: async (_, { id }) => {
            try {
                return await medSchema.findById(id);
            } catch (error) {
                throw new Error('Error fetching med');
            }
        },
    },
    Mutation: {
        createMed: async (_, args) => {
            try {
                const med = new medSchema(args);
                await med.save();
                await pubsub.publish(MED_CREATED, { medCreated: med });
                return med;
            } catch (error) {
                throw new Error('Error creating med');
            }
        },
        updateMed: async (_, { id, ...updateArgs }) => {
            try {
                const updatedMed = await medSchema.findByIdAndUpdate(id, updateArgs, { new: true });
                await pubsub.publish(MED_UPDATED, { medUpdated: updatedMed });
                return updatedMed;
            } catch (error) {
                throw new Error('Error updating med');
            }
        },
        deleteMed: async (_, { id }) => {
            try {
                return await medSchema.findByIdAndDelete(id);
            } catch (error) {
                throw new Error('Error deleting med');
            }
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
const schema = makeExecutableSchema({ typeDefs, resolvers });

const httpServer = createServer();
const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
});

const serverCleanup = useServer({ schema }, wsServer);

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
});

export default startServerAndCreateH3Handler(apollo, {
    websocket: {
        ...defineGraphqlWebSocket({ schema }),
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
    context: (event) => {
        /*...*/
    },
});

// Start the HTTP server with WebSocket enabled
httpServer.listen(4000, () => {
    // console.log('Server is now running on http://localhost:4000/graphql');
});
