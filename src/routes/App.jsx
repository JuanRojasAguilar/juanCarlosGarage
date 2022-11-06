import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "@containers/Layout"
import Home from "@pages/Home"
import Services from "@pages/Services"

import "@styles/global.css"

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App