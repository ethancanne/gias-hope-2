'use server';
import axios from 'axios';

export async function subscribeToMailchimp(email: string) {
  const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY; // Store API key in environment variables
  const listId = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID;
  const server = 'us20'; // Replace with your server's name if it's different

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  try {
    const response = await axios.post(
      `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log('DATA', response.data);

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error(
      'Error subscribing:' + error.response?.data.title || error.message
    );
    return {
      success: false,
      error: error.response?.data.title || error.message,
    };
  }
}
