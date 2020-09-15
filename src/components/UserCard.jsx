import React from 'react'
import '../assets/styles/components/UserCard.scss'
import { Perfiles, EstatusUsuario } from '../utils/Utilities'
import gravatar from './gravatar'

const UserCard = ({ IDUsuario, Correo, Nombre, Perfil, Estatus, onClickUser }) => {
    const _perfil = () => {
        for (const prop in Perfiles) {
            if (Perfiles[prop] === Perfil)
                return prop.toLowerCase()
        }
    }

    const _estatus = () => {
        for (const prop in EstatusUsuario) {
            if (EstatusUsuario[prop] === Estatus)
                return prop.toLowerCase()
        }
    }

    const handleOnClick = () => {
        onClickUser(IDUsuario)
    }

    return (
        <div className="App__card" onClick={handleOnClick}>
            <div className="User__card">
                <img src={gravatar(Correo)} className="User__card--img" />
                <div className="User__info">
                    <span className="User__info--name">{Nombre}</span>
                    <span className="User__info--email">{Correo}</span>
                    <div className="User__details">
                        <span className="User__details--perfil">Perfil: {_perfil()}</span>
                        <span
                            className={Estatus === 1
                                ? "User__details--ok"
                                : "User__details--error"}
                        >Estatus: {_estatus()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard