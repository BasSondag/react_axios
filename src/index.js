import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request =>{
  console.log(request, '[Index.js] axios interceptor');
  //edit request config
  return request;
}, error => {
  console.log(error, '[Index.js] axios interceptor error');
  return Promise.reject(error);
})

axios.interceptors.response.use(response =>{
  console.log(response, '[Index.js] axios interceptor response')
  //edit request config
  return response;
}, error => {
  console.log(error, '[Index.js] axios interceptorresponse error');
  return Promise.reject(error);
})



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
