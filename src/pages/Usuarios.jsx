import React, { useState, useEffect } from 'react'
import UserCard from '../components/UserCard'
import AddButton, { typeButton } from '../components/AddButton'
import UserForm from '../components/UserForm'
import APIMethods from '../utils/api'
import { connect } from 'react-redux'
import { Perfiles, EstatusUsuario, validarEmail } from '../utils/Utilities'

const Usuarios = ({ userSession }) => {
    const initialForm = {
        IDUsuario: 0,
        Nombre: "",
        Correo: "",
        Contraseña: "",
        Perfil: Perfiles.USER,
        Estatus: EstatusUsuario.ACTIVO,
        Key: ""
    }
    const typeMode = { ADD: "Agregar", UPDATE: "Modificar" }

    const [formParams, setFormParams] = useState({ showform: false, mode: null, userForm: initialForm, error: "" })
    const [dataUsers, setDataUsers] = useState({ isLoading: true })

    useEffect(() => {
        GetUsers()
    }, [])

    const handleAdd = () => {
        setFormParams({
            ...formParams,
            showform: true,
            mode: typeMode.ADD,
        })
    }

    const GetUsers = async () => {
        const data = await APIMethods.GetUsers(userSession.Key)
        setDataUsers({ isLoading: false, data: data })
    }

    const handleOnClick = async (ID) => {
        const data = await APIMethods.GetUser(userSession.Key, ID)
        setFormParams({
            ...formParams,
            showform: true,
            mode: typeMode.UPDATE,
            userForm: data.Usuario
        })
    }

    const handleOnChangeForm = event => {
        setFormParams({
            ...formParams,
            userForm: {
                ...formParams.userForm,
                [event.target.name]: event.target.value,
            }
        })
    }

    const handleCloseForm = () => {
        setFormParams({ showform: false, mode: null, userForm: initialForm, error: "" })
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if (formParams.userForm.Nombre.trim()) {
            if (formParams.userForm.Correo.trim()) {
                if (validarEmail(formParams.userForm.Correo.trim())) {
                    if (formParams.mode === typeMode.UPDATE || formParams.userForm.Contraseña.trim()) {
                        const request = { Key: userSession.Key, Usuario: formParams.userForm }
                        const response = await formParams.mode === typeMode.ADD
                            ? APIMethods.CreateUser(request)
                            : APIMethods.UpdateUser(request)

                        if (!response.hasError) {
                            //popup notificacion
                            alert("Se completo correctamente")
                            setFormParams({ showform: false, mode: null, userForm: initialForm, error: "" })
                            GetUsers()
                        }
                        else
                            setErrorForm(response.message)
                    }
                    else
                        setErrorForm("Ingrese la contraseña")
                }
                else
                    setErrorForm("El correo no es valido")
            }
            else
                setErrorForm("Ingrese el correo")
        }
        else
            setErrorForm("Ingrese el nombre")
    }

    const setErrorForm = error => {
        setFormParams({
            ...formParams,
            error: error
        })
    }

    //overaly de carga
    if (dataUsers.isLoading)
        return (<div>Loading...</div>)
    //popup notificacion
    if (dataUsers.data.hasError)
        return (<div>{dataUsers.data.message}</div>)
    return (
        <>
            <div className="App__container">
                {dataUsers.data.Usuarios.map(item =>
                    <UserCard key={item.IDUsuario}  {...item} onClickUser={handleOnClick} />)}
            </div>
            <AddButton element={typeButton.ADD_CALCULO2} onAdd={handleAdd} />
            {formParams.showform &&
                <UserForm
                    onChangeForm={handleOnChangeForm}
                    onCancel={handleCloseForm}
                    onSend={handleSubmit}
                    {...formParams}
                    isAdmin={(userSession.Perfil === Perfiles.MASTER)} />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        userSession: state.userSession,
    }
}

export default connect(mapStateToProps, null)(Usuarios)