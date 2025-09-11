import axios from "axios";

// Create an Axios instance (so we can set baseURL, headers, etc.)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to send a new message
export const sendMessage = async (messageData) => {
  try {
    const response = await api.post("/messages", messageData);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

// Function to fetch all messages (if you later want to show them on frontend)
export const getMessages = async () => {
  try {
    const response = await api.get("/messages");
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
