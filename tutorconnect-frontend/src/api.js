import axios from 'axios';

const API_URL = 'http://172.18.128.1:3000'; // Ensure this URL points to your backend

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};
