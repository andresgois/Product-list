import axios from "axios";

const api = axios.create({
  //baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json',

});

export default api; 