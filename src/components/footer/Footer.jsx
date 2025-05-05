import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                ©{new Date().getFullYear()} Creado por <a href="https://github.com/ManuelSabini">Manuel Sabini</a>
            </footer>
        </>
    )
}

export default Footer