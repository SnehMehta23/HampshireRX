export default defineEventHandler(async (event) => {
  try {
    const { _id } = await getQuery(event);
    const TARGET_MEDICATION = await medicationSchema.findById(_id);
    return {
      statusCode: 200,
      body: TARGET_MEDICATION,
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      error: e.message,
    };
  }
});
