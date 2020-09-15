import React, { useEffect } from 'react'
import ToggleSwitch from './ToggleSwitch'
import { Perfiles } from '../utils/Utilities'

const UserForm = ({ isAdmin, onChangeForm, userForm, mode, error, onCancel, onSend }) => {
    useEffect(() => {
        autoSelect()
    }, [])

    const autoSelect = () => {
        const x = document.querySelector("#userPerfil")
        console.log(x.options)
        for (let index = 1; index < x.options.length; index++) {
            if (x.options[index].value === userForm.Perfil.toString()) {
                x.selectedIndex = index
                break;
            }
        }
    }

    return (
        <div className="App__overaly">
            <form className="App__form-popup" onSubmit={onSend}>
                <p className="App__form-popup-title">{mode} usuario</p>
                <input
                    name="Nombre"
                    onChange={onChangeForm}
                    value={userForm.Nombre}
                    placeholder="Nombre"
                    className="input__text--bottom-border"
                    autoComplete="off"
                    type="text" />
                <input
                    name="Correo"
                    onChange={onChangeForm}
                    value={userForm.Correo}
                    placeholder="Correo"
                    className="input__text--bottom-border"
                    autoComplete="off"
                    type="text" />
                <input
                    name="Contraseña"
                    onChange={onChangeForm}
                    value={userForm.Contraseña}
                    placeholder="Contraseña"
                    className="input__text--bottom-border"
                    autoComplete="off"
                    type="password" />
                {isAdmin &&
                    <select
                        id="userPerfil"
                        name="Perfil"
                        onChange={onChangeForm}
                        className="input__ddl--bottom-border ">
                        {Object.keys(Perfiles).map(p =>
                            <option key={Perfiles[p]} value={Perfiles[p]}>{p.toLowerCase()}</option>
                        )}
                    </select>
                }
                <div className="App__form-popup-row-container">
                    <span className="App__form-popup-subtitle">Estatus</span>
                    <ToggleSwitch id="Estatus" onToggle={onChangeForm} initial={userForm.Estatus === 1} />
                </div>
                <p className="App__form-popup-message">{error}</p>
                <div className="App__form-popup-row-container">
                    <button
                        type="button"
                        className="input__button--rounded--cancel-half"
                        onClick={onCancel} >Cancelar</button>
                    <button type="submit" className="input__button--rounded--ok-half">Guardar</button>
                </div>
            </form>
        </div >
    )
}

export default UserForm