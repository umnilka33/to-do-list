import React, { Fragment } from 'react'
import { Title } from './components/title'
import { ToDo } from './containers/todo/index'
import { GetTaskID } from './components/task-detail/index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import type { RootState } from './redux/store'
import { Login } from './components/authorization';
import './App.css'
import { Logout } from './components/logout';

function App() {
    const isAuth = useSelector((state:RootState) => state.user.isAuth)

    return (
        <BrowserRouter>
            <Routes>
                {isAuth ?
                    <Route path="/login" element={<Navigate to="/" replace />} />
                    :
                    <Route path="/" element={<Navigate to="/login" replace />} />
                }
                <Route path='/' element={
                    <Fragment>
                        <Title title='to-do-list' />
                        <ToDo />
                        <Logout />
                    </Fragment>
                } />
                <Route path='/task/:id' element={<GetTaskID />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
