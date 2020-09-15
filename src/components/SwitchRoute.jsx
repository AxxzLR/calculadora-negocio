import React from 'react'
import { routes } from '../routes'
import Login from '../pages/Login';
import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios';
import NotFound from '../pages/NotFound';
import Layout from './Layout';

const SwitchRoute = props => {
    document.title = props.actualRoute.title;
    let element = null
    switch (props.actualRoute.route) {
        case routes.LOGIN.route:
            element = <Login />
            break
        case routes.HOME.route:
            element = <Home />
            break
        case routes.USERS.route:
            element = <Usuarios />
            break
        default:
            element = <NotFound />
    }
    return (
        <Layout isLogged={props.isLogged} titlePage={props.actualRoute.titlePage} >{element}</Layout>
    )
}
export default SwitchRoute