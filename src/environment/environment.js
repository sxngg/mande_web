import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:3000/mande'
})

export default httpClient