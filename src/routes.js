import React from 'react'

import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Home from './pages/home/'
import Admin from './pages/admin/login/'
import AdminHome from './pages/admin/home/'

import { isAuthenticated } from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/admin/login", state: { from: props.location } }} />
                )
            }
        />
    )
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin/login' component={Admin} />
            <PrivateRoute exact path='/admin' component={AdminHome} />
        </BrowserRouter>
    )
}

export default Routes