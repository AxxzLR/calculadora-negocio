import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setActualRoute, clearNextRoute } from '../actions'
import { routes } from '../routes'
import SwitchRoute from '../components/SwitchRoute';
import LoadingApp from '../pages/LoadingApp';
import { object } from 'prop-types';

const App = props => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(!isMounted)
            let redirectRoute = props.userSession.isLogged
                ? redirectRoute = routes.HOME
                : redirectRoute = routes.LOGIN
            if (props.actualRoute.route !== redirectRoute.route)
                props.setActualRoute(redirectRoute)
        }
        else {
            if (Object.keys(props.nextRoute).length > 0) {
                const redirectRoute = props.userSession.isLogged
                    ? props.nextRoute.route === routes.LOGIN.route
                        ? routes.HOME
                        : props.nextRoute
                    : routes.LOGIN
                if (props.actualRoute.route !== redirectRoute.route)
                    props.setActualRoute(redirectRoute)
                else
                    props.clearNextRoute()
            }
        }
    }, [props.actualRoute, props.nextRoute])

    return (
        isMounted
            ? <SwitchRoute
                actualRoute={props.actualRoute}
                isLogged={props.userSession.isLogged} />
            : <LoadingApp />
    )
}

const mapDispatchToProps = {
    setActualRoute,
    clearNextRoute,
}

const mapStateToProps = state => {
    return {
        actualRoute: state.appSession.actualRoute,
        nextRoute: state.appSession.nextRoute,
        userSession: state.userSession,
        lastSession: state.lastSession
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)