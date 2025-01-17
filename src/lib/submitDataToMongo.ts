'use server';

import { MongoClient } from 'mongodb';

export async function submitFormToMongo(data: any) {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI!, {});
    const db = client.db('grants');
    const collection = db.collection('submissions');

    const dataWithDateCreated = {
      ...data,
      dateCreated: new Date(), // Automatically set current date and time
    };
    // Insert the form data into the MongoDB collection
    const result = await collection.insertOne(dataWithDateCreated);
    client.close();

    return { success: true, id: result.insertedId };
  } catch (error: any) {
    return {
      success: false,
      error: 'Error connecting to MongoDB or inserting data' + error.message,
    };
  }
}
