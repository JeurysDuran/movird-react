import { useState } from "react"

export default function Search() {
    const [origin, setOrigin] = useState("")
    const [dest, setDest] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    function buscar() {
        if (origin && dest) {
            setLoading(true)

            // Simular búsqueda
            setTimeout(() => {
                setResult("✅ Ruta optimizada encontrada: 15 minutos menos de viaje 🚗")
                setLoading(false)
            }, 1500)
        }
    }

    return ( <
        div className = "page" >
        <
        div className = "header" >
        <
        h1 > Buscar Ruta🔍 < /h1> <
        p > Encuentra el camino más rápido < /p> <
        /div>

        <
        div className = "card" >
        <
        div className = "input-group" >
        <
        label > Punto de partida < /label> <
        div className = "input-icon" >
        <
        input type = "text"
        placeholder = "Ej: Centro, Santiago"
        value = { origin }
        onChange = {
            (e) => setOrigin(e.target.value) }
        /> <
        /div> <
        /div>

        <
        div className = "input-group" >
        <
        label > Destino < /label> <
        div className = "input-icon destination" >
        <
        input type = "text"
        placeholder = "Ej: Universidad, Zona Norte"
        value = { dest }
        onChange = {
            (e) => setDest(e.target.value) }
        /> <
        /div> <
        /div>

        <
        button onClick = { buscar }
        className = "btn"
        disabled = { loading || !origin || !dest } >
        { loading ? "🔄 Buscando..." : "🚗 Buscar Ruta" } <
        /button>

        {
            result && ( <
                div className = "result" > { result } <
                /div>
            )
        }

        {
            !origin || !dest ? ( <
                p style = {
                    { color: 'var(--gray)', fontSize: '14px', marginTop: '16px' } } > ⚠️Completa ambos campos para buscar <
                /p>
            ) : null
        } <
        /div> <
        /div>
    )
}