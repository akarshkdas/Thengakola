import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Django server URL
});

// Function to fetch all products
export const fetchProducts = async () => {
    try {
        const response = await api.get('/products/', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function for user login
export const login = async (username, password) => {
    try {
        const response = await api.post('/login/', { username, password });
        localStorage.setItem('token', response.data.access); // Store token for later use
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function for user signup
export const signup = async (userData) => {
    try {
        const response = await api.post('/register/', userData);
        return response.data;
    } catch (error) {
        console.error('Error during signup:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

export default api;
