import React, {useState, useContext} from "react"
import Styles from "@styles/Header.module.scss"
import garageLogo from "@logos/garage-logo.png"
import downArrow from "@icons/down-arrow.svg"

const Header = () => {
    return(
        <nav className={Styles.nav}>
            <img src={garageLogo} className={Styles.garageLogo} alt="garageLogo" />
            <ul>
                <li>
                    <a href="/Services">Servicios</a>
                    <img src={downArrow} className={Styles.downArrow} />
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
                    <img src={downArrow} className={Styles.downArrow} />
                </li>
            </ul>
        </nav>
    )
}

export default Header