import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/home/'
import Admin from './pages/admin/login/'
import AdminRegister from './pages/admin/register/'
import AdminHome from './pages/admin/home/'

import { isAuthenticated, logout } from './services/auth'

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
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin/login' component={Admin} />
                <Route exact path='/admin/register' component={AdminRegister} />
                <Route exact path='/admin/logout' render={(props) => { logout(); props.history.push('/admin/login') }} />
                <PrivateRoute exact path='/admin' component={AdminHome} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes