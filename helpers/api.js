import axios from 'axios'; 

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`, 
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});


export const register = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/v1/client', userData);
    console.log(userData);
    return response.data;

  } catch (error) {
    console.error('Error registering client:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/api/v1/auth/login', { email, password });
        return response.data; 
    } catch (error) {
        console.error('Login Error:', error.response ? error.response.data : error.message);
        throw error; 
    }
};

