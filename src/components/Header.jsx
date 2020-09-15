import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteUserSession, setNextRoute } from '../actions'
import { routes } from '../routes'
import { Perfiles } from '../utils/Utilities'
import Logo from '../assets/static/logo-blanco.png'
import MenuIcon from './MenuIcon'
import Logout from '../assets/static/Logout.png'

import '../assets/styles/components/Header.scss'

const Header = props => {
    const { Correo, Nombre, Perfil } = props.userSession
    const isAdmin = (Perfil === Perfiles.ADMIN || Perfil === Perfiles.MASTER)

    const [isShowed, setShowed] = useState(false)

    useEffect(() => {
        if (isAdmin) {
            var x = document.querySelector(".Header__menu-items")
            isShowed
                ? x.classList.add("Header__menu-items--showed")
                : x.classList.remove("Header__menu-items--showed")
        }
    }, [isShowed])

    const toggleMenu = () => {
        setShowed(!isShowed)
    }

    const handleLogout = () => {
        props.deleteUserSession({})
    }

    const handleRedirect = (to) => {
        if (isShowed)
            setShowed(!isShowed)
        props.setNextRoute(to)
    }

    return (
        <>
            <div className="Header__container" >
                <div className={isAdmin
                    ? "Header__menu"
                    : "Header__menu--user"}>
                    {isAdmin &&
                        <MenuIcon stateOpen={isShowed} toogleAction={toggleMenu} />}
                    <img
                        src={Logo}
                        alt="Logo"
                        onClick={() => handleRedirect(routes.LOGIN)}
                        className="Header__menu--logo" />
                </div>
                <div className="Header__info">
                    <div>
                        <span className="Header__p--name">{Nombre}</span>
                        <br />
                        <span className="Header__p--email">{Correo}</span>
                    </div>
                    <img
                        src={Logout}
                        className="Header__info--logout"
                        onClick={handleLogout} />
                </div>
            </div>
            {
                isAdmin &&
                <div className="Header__menu-items">
                    <span onClick={() => handleRedirect(routes.USERS)}>Usuarios</span>
                    <span onClick={() => handleRedirect(routes.CATALOGS)}>Catálogos</span>
                    <div className="Header__menu-content">
                    </div>
                </div>
            }
        </>
    )
}

const mapDispatchToProps = {
    deleteUserSession,
    setNextRoute,
}

const mapStateToProps = state => {
    return {
        userSession: state.userSession,
        actualRoute: state.appSession.actualRoute
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)