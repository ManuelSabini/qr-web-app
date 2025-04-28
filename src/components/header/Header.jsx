import React from 'react'
import './header.css'
import Logo from '../logo/Logo.jsx'

const Header = () => {
    return (
        <header>
            <Logo />
            <div className='nombreApp'>
                <h1>QRcatch</h1>
            </div>
        </header>
    )
}

export default Header