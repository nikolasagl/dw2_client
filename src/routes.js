import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Admin from './pages/admin/login'
import AdminHome from './pages/admin/home/'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin/index' component={AdminHome} />
        </BrowserRouter>
    )
}

export default Routes