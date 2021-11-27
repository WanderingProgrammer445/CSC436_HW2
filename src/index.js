import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import App from './App';

import { RequestProvider } from 'react-request-hook'
import axios from 'axios'

//baseURL: '/'
const axiosInstance = axios.create({
  
  baseURL: '/'
  //baseURL: 'http://localhost:3000/api/'
})
//Suspended component throws error so need to wrap with "fallback"
ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <Suspense fallback={<div>Suspended component</div>}>
        <App />
      </Suspense>
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


