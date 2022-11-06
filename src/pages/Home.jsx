import React from "react"
import Header from "@components/Header"
import Presentation from "@components/Presentation"

import Styles from "@styles/Home.module.scss"

const Home = () => {
    return(
        <div className={`${Styles.homeBody} pageBackground`}>
            <Header />
            <Presentation />
        </div>
    )
}

export default Home