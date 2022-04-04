import React, { Fragment } from 'react'
import Title from './components/title'
import ToDo from './containers/todo/index'
import Login from './components/authorization'

import './App.css'

const App = () => (
    <Fragment>
        <Login />
    </Fragment>
) 
/*
const App = () => (
    <Fragment>
        <Title title='to-do-list' />
        <ToDo />
    </Fragment>
) 
*/

export default App;
