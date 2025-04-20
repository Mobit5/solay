const axios = require('axios');  // Corrected the import

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'https://solay-backend-420j.onrender.com/api';

const axiosClient = axios.create({
    baseURL: apiUrl,  // Corrected the property name
    headers: {
        Authorization: `Bearer ${apiKey}`  // Corrected the token prefix
    }
});

export default axiosClient;  // Corrected the spelling of 'default'
