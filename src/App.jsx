import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import Map from "./pages/Map"

import "./styles.css"

function App() {

    return (

        <
        BrowserRouter >

        <
        div className = "app" >

        <
        Routes >
<Route path="/map" element={<Map />} />
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/search"
        element = { < Search / > }
        /> <
        Route path = "/profile"
        element = { < Profile / > }
        />

        <
        /Routes>

        <
        Navbar / >

        <
        /div>

        <
        /BrowserRouter>

    )

}

export default App