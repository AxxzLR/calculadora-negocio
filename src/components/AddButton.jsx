import React from 'react'
import '../assets/styles/components/AddButton.scss'
import MaterialIcon from './materialIcon'
import Pencil from '../assets/static/icon-pencil.png'
import User from '../assets/static/icon-user.png'

export const typeButton = {
    ADD_CALCULO: <img src={Pencil} className="AddButton__icon" />,
    ADD_CALCULO2: <MaterialIcon nameIcon="create" classAdd='AddButton__icon' />,
    ADD_USER: <img src={User} className="AddButton__icon" />
}

const AddButton = ({ element, onAdd }) => {
    return (
        <div className="AddButton" onClick={onAdd}>
            {element}
        </div>
    )
}

export default AddButton