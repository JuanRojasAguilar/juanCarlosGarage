import React from "react"
import Styles from "@styles/Services.module.scss"
import ServiceCards from "@components/ServiceCards"

const Services = () => {
    return(
        <div className={Styles.servicesBody}>
           <ServiceCards />
        </div>
    )
}

export default Services