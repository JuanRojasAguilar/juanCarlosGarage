import React from "react"
import Styles from "@styles/Presentation.module.scss"

const Presentation = () => {
    return(
        <div className={Styles.presentationDiv}>
            <p>ARTISTAS DE LA ARTESANÍA AUTOMOTRIZ</p>
            <h1>AUTOS INCREIBLES<br />HECHOS REALIDAD</h1>
            <button>CONOCE EL TALLER</button>
        </div>
    )
}

export default Presentation