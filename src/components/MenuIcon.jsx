import React, { useState, useEffect } from 'react'
import '../assets/styles/components/MenuIcon.scss'

const MenuIcon = ({ toogleAction, stateOpen }) => {
    useEffect(() => {
        const x = document.querySelector('.MenuIcon__container')
        stateOpen
            ? x.classList.add("MenuIcon__change")
            : x.classList.remove("MenuIcon__change")
    }, [stateOpen])


    return (
        <div className="MenuIcon__container" onClick={toogleAction}>
            <div className="MenuIcon__bar--1"></div>
            <div className="MenuIcon__bar--2"></div>
            <div className="MenuIcon__bar--3"></div>
        </div>
    )
}

export default MenuIcon