import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {GetTaskID} from './components/task-detail/index';
import store from './redux/store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} /> 
          <Route path='/task/:id' element={<GetTaskID />} /> 
        </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

