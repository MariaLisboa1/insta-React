import axios from 'axios';

const api = axios.create({
    beaseUrl: 'http://localhost:3333'
});

export default api;