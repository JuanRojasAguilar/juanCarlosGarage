import React, {useState, useContext} from "react"
import "@styles/Header.scss"
import garageLogo from "@logos/garage-logo.png"

const Header = () => {
    return(
        <nav>
            <img src={garageLogo} alt="" />
            <ul>
                <li>
                    <a href="/">Servicios</a>
                </li>
                <li>
                    <a href="/">Nosotros</a>
                </li>
                <li>
                    <a href="/">Galería</a>
                </li>
                <li>
                    <a href="/">Tutti</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header