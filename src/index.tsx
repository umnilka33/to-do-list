import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GetTaskID } from './components/task-detail/index';
import store from './redux/store'
import App from './App'
import Login from './components/authorization';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} /> 
          <Route path='/task/:id' element={<GetTaskID />} /> 
          <Route path='/login' element={<Login />} /> 
        </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

