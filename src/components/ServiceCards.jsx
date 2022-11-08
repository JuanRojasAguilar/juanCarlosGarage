import React from "react"
import Styles from "@styles/ServiceCards.module.scss"

const ServiceCards = () => {
    return(
        <div className={Styles.cardContainer}>
            <div className={Styles.card}>
                <img src="" alt="" />
                <h2>Restauracion</h2>
                <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore.</p>
            </div>
        </div>
    )
}

export default ServiceCards