import React, {useState, useContext} from "react"
import "@styles/Header.scss"
import garageLogo from "@logos/garage-logo.png"
import downArrow from "@icons/down-arrow.svg"

const Header = () => {
    return(
        <nav>
            <img src={garageLogo} alt="" />
            <ul>
                <li>
                    <a href="/">Servicios</a>
                    <img src={downArrow} className="down-arrow" />
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
                    <a href="/">CONTACTO</a>
                    <img src={downArrow} className="down-arrow" />
                </li>
            </ul>
        </nav>
    )
}

export default Header