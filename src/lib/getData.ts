'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MongoClient } from 'mongodb';

export async function getMarkdownData(folder: string) {
  const folderPath = path.join(process.cwd(), folder);

  try {
    const files = await fs.promises.readdir(folderPath);
    const markdownData: any = {};

    for (const file of files) {
      if (path.extname(file) === '.md') {
        const filePath = path.join(folderPath, file);
        const fileContents = await fs.promises.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        const slug = path.basename(file, '.md');
        markdownData[slug] = { data, content };
      }
    }

    return markdownData;
  } catch (error) {
    console.error(`Error reading markdown files from ${folderPath}:`, error);
    throw error;
  }
}

export async function getPostsData() {
  const markdownData = await getMarkdownData('./content/posts');
  // console.log('PLEASE', markdownData);

  return markdownData;
}

export async function getPagesData(pageSlug: string | undefined = undefined) {
  const markdownData = await getMarkdownData('./content/pages');

  if (!pageSlug) {
    return markdownData;
  } else {
    return markdownData[pageSlug].data;
  }
}

export async function fetchGrantsFromMongo() {
  try {
    // Connect to MongoDB using the connection URI
    const client = await MongoClient.connect(process.env.MONGODB_URI!, {});
    const db = client.db('grants');
    const collection = db.collection('submissions');

    // Fetch data from the collection
    const data = await collection.find({}).toArray(); // Fetch all documents in the collection
    const plainGrants = data.map((grant: any) => ({
      ...grant,
      _id: grant._id.toString(), // Convert _id to a string
    }));

    client.close(); // Close the connection to MongoDB

    return plainGrants; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return []; // Return an empty array in case of error
  }
}
