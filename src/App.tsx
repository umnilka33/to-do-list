import React, { Fragment } from 'react'
import {Title} from './components/title'
import {ToDo} from './containers/todo/index'
import { useSelector } from "react-redux";
import type { RootState } from './redux/store'
import './App.css'


import { Routes, Route,Navigate } from 'react-router-dom';
import Login from './components/authorization';

/*const App = () => (
    <Fragment>
        <Title title='to-do-list' />
        <ToDo />
    </Fragment>
) */

function App() {
    const isAuth = useSelector((state:RootState) => state.user.isAuth)
    console.log(isAuth)
    return (
        <Fragment>
            {isAuth? 
                <div>
                    <Title title='to-do-list' />
                    <ToDo />
                </div>
            
        :
        <Routes>
                        <Route path="*" element={<Navigate to="/login" replace />}/>
                    </Routes>
        }
        </Fragment>
        
    );
}


export default App;