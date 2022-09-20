import React, { Fragment } from 'react'
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GetTaskID } from './components/task-detail/index';
import { Login } from './components/authorization';
import type { RootState } from './redux/store';
import { ToDo } from './containers/todo/index';
import { Logout } from './components/logout';
import { Title } from './components/title';
import './App.css'

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
