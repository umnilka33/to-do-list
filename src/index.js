import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskDetail from './components/task-detail/task-detail';
import Error from './components/error/error';
import store from './store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:id' element={<TaskDetail infa={store}/>} />
          <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

