import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { setUserSession, setNextRoute, setActualRoute } from '../actions'
import { routes } from '../routes'
import APIMethods from '../utils/api'
import { validarEmail } from '../utils/Utilities'


const Login = props => {
    const [loginForm, setLoginForm] = useState({})

    const handleOnChange = event => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value,
        })
    }

    const handleSingIn = async event => {
        event.preventDefault()
        if (loginForm.hasOwnProperty('Correo') && loginForm.Correo && loginForm.Correo.trim()) {
            if (validarEmail(loginForm.Correo.trim())) {
                if (loginForm.hasOwnProperty('Contraseña') && loginForm.Contraseña && loginForm.Contraseña.trim()) {

                    const response = await APIMethods.Login(loginForm)

                    if (!response.hasError) {
                        props.setUserSession({ ...response.Usuario, isLogged: true, })
                        props.setActualRoute(routes.HOME)
                    }
                    else
                        setErrorForm(response.message)
                }
                else
                    setErrorForm('Ingresa tu contraseña')
            }
            else
                setErrorForm('Correo no valido')
        }
        else
            setErrorForm('Ingresa tu correo')
    }

    const setErrorForm = error => {
        setLoginForm({
            ...loginForm,
            error: error
        })
    }

    return (
        <LoginForm
            loginForm={loginForm}
            onChangeForm={handleOnChange}
            onSingIn={handleSingIn} />
    )
}

const mapDispatchToProps = {
    setUserSession,
    setNextRoute,
    setActualRoute,
}

export default connect(null, mapDispatchToProps)(Login)