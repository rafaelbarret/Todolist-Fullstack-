import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        return Promise.reject(error);
    }
);

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/users/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
        throw error.response.data;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await api.post('/users/login', userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
        throw error.response.data;
    }
};

export const getTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error.response ? error.response.data : error.message);
        throw error.response.data;
    }
};

export const createTask = async (taskData) => {
    try {
        const response = await api.post('/tasks', taskData);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error.response ? error.response.data : error.message);
        throw error.response.data;
    }
};

export const updateTask = async (id, taskData) => {
    try {
        const response = await api.put(`/tasks/${id}`, taskData);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error.response ? error.response.data : error.message);
        throw error.response.data;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await api.delete(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error.response ? error.response.data : error.message);
        throw error.response.data;
    }
};

export default api;




