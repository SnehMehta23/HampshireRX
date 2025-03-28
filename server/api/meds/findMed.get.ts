

export default defineEventHandler(async (event) => {
    try {
        const {searchTerm} = await getQuery(event)
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
    } catch (error:any) {
        return {
            statusCode: 500,
            body: {message: 'Error fetching meds',error: error.message}
        }
    }
})
