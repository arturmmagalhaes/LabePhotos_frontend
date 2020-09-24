import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-52-54-130-133.compute-1.amazonaws.com/'
});

export default api;