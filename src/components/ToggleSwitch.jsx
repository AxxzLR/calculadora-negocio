import React, { useState, useEffect } from 'react'
import '../assets/styles/components/ToggleSwitch.scss'

const ToggleSwitch = ({ id, onToggle, initial = true }) => {
    const [isOn, setValue] = useState(initial)
    useEffect(() => {
        const x = document.querySelector(`#${id}`)
        if (isOn)
            x.classList.add("ToggleSwitch__container--active")
        else
            x.classList.remove("ToggleSwitch__container--active")
    }, [isOn])
    const handleOnClick = () => {
        setValue(!isOn)
        const _value = !isOn ? 1 : 0
        onToggle({ target: { name: id, value: _value } })
    }
    return (
        <div className="ToggleSwitch__container" id={id} onClick={handleOnClick}>
            <div className="ToggleSwitch__dot"></div>
        </div>
    )
}

export default ToggleSwitch