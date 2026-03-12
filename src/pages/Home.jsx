import { Link } from "react-router-dom"

export default function Home() {
    return ( <
        div className = "page" >
        <
        div className = "header" >
        <
        h1 > ¡Bienvenido a moviRD!👋 < /h1> <
        p > Optimiza tu tiempo en tránsito < /p> < /
        div >

        <
        img src = "/img/logo-movird.png"
        alt = "MoviRD"
        className = "logo-img" / >

        <
        div className = "card hero" >
        <
        h2 > 🚗Encuentra la mejor ruta < /h2> <
        p > Reduce tu tiempo de viaje con rutas optimizadas basadas en datos en tiempo real < /p> < /
        div >

        <
        div className = "stats" >
        <
        div className = "card" >
        <
        p > Tiempo ahorrado < /p> <
        h2 > 2, 450 hrs < /h2> < /
        div > <
        div className = "card" >
        <
        p > Rutas activas < /p> <
        h2 > 158 < /h2> < /
        div > <
        div className = "card" >
        <
        p > Reducción < /p> <
        h2 > 35 % < /h2> < /
        div > <
        /div>

        <
        Link to = "/search"
        className = "btn" > 🔍Buscar Ruta Ahora <
        /Link>

        <
        p className = "text-center"
        style = {
            { color: 'var(--gray)', marginTop: '16px' }
        } >
        +10, 000 viajes optimizados <
        /p> < /
        div >
    )
}