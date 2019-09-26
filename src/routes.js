import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Admin from './pages/admin'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
        </BrowserRouter>
    )
}

export default Routes