import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const sportikaApi = axios.create({ baseURL });

export default sportikaApi;
