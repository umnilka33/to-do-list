import React, { Fragment } from 'react'
import Title from './components/title/title'
import ToDo from './containers/todo/todo'

import './App.css'

const App = () => (
    <Fragment>
        <Title title='to-do-list' />
        <ToDo />
    </Fragment>
)

export default App;
