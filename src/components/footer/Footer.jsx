import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                ©{new Date().getFullYear()} Creado por <a href="https://www.linkedin.com/in/manuel-sabini">Manuel Sabini</a>
            </footer>
        </>
    )
}

export default Footer