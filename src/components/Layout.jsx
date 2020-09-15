import React from 'react'
import Header from './Header'

const Layout = ({ children, isLogged, titlePage }) => (
    <>
        {isLogged &&
            <Header />}
        <div className={isLogged ? "Page__container" : "Page__container--nolayout"}>
            {isLogged &&
                <p className="App__title">{titlePage}</p>}
            {children}
        </div>
    </>
)

export default Layout