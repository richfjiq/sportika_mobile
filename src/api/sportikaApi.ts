import axios from 'axios';

const baseURL = 'https://sportika-server.herokuapp.com/api';

const sportikaApi = axios.create({ baseURL });

export default sportikaApi;
