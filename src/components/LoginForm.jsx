import React, { useState } from 'react'
import '../assets/styles/components/Login.scss'
import Logo from '../assets/static/logo-blanco.png'
import Background from '../assets/static/background-login.jpg'

const LoginForm = ({ onChangeForm, onSingIn, loginForm }) => (
    <div className="Login__container" >
        <img src={Background} className="Login__container--img"/>
        <form className="Login__card" onSubmit={onSingIn}>
            <img
                src={Logo}
                className="Login__card--img"
                alt="Logo" />
            <input
                type="text"
                placeholder="Correo"
                className="input__text--rounded"
                name="Correo"
                onChange={onChangeForm}
                // value={loginForm.email}
                autoComplete="off" />

            <input
                type="password"
                placeholder="Contraseña"
                className="input__text--rounded"
                name="Contraseña"
                onChange={onChangeForm}
                // value={loginForm.password}
                autoComplete="off" />
            <label className="Login__card--label">{loginForm.error}</label>
            <button type="submit" className="input__button--rounded--main">Ingresar</button>
        </form>
    </div >
)

export default LoginForm