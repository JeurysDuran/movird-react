import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    const location = useLocation()

    return ( <
        div className = "navbar" >
        <
        Link to = "/"
        className = { location.pathname === "/" ? "active" : "" } >
        Inicio <
        /Link> <
        Link to = "/search"
        className = { location.pathname === "/search" ? "active" : "" } >
        Buscar <
        /Link> 
       <
        Link to = "/profile"
        className = { location.pathname === "/profile" ? "active" : "" } >
        Perfil <
        /Link> 
        <
        /div>
        
    )
}