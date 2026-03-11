export default function Profile() {
    return ( <
        div className = "page" >
        <
        div className = "header" >
        <
        h1 > Mi Perfil < /h1> <
        p > Gestiona tu cuenta y estadísticas < /p> < /
        div >

        <
        div className = "card" >
        <
        div className = "profile-header" >
        <
        div className = "profile-avatar" >
        JP <
        /div> <
        div className = "profile-info" >
        <
        h2 > Juan Pérez < /h2> <
        p > juan.perez @email.com < /p> <
        p > 📱+1 809 - 555 - 1234 < /p> < /
        div > <
        /div> < /
        div >

        <
        h3 style = {
            { margin: '24px 0 16px', color: 'var(--dark)' }
        } > 📊Tus estadísticas <
        /h3>

        <
        div className = "stats" >
        <
        div className = "card" >
        <
        p > Rutas buscadas < /p> <
        h2 > 87 < /h2> <
        small style = {
            { color: 'var(--gray)' }
        } > +12 este mes < /small> < /
        div > <
        div className = "card" >
        <
        p > Tiempo ahorrado < /p> <
        h2 > 42 h < /h2> <
        small style = {
            { color: 'var(--gray)' }
        } > +8 h este mes < /small> < /
        div > <
        /div>

        <
        div className = "card"
        style = {
            { marginTop: '16px' }
        } >
        <
        h3 style = {
            { marginBottom: '12px' }
        } > Logros < /h3> <
        div style = {
            { display: 'flex', gap: '16px', justifyContent: 'center' }
        } >
        <
        span style = {
            { fontSize: '32px' }
        } > 🚗 < /span> <
        span style = {
            { fontSize: '32px' }
        } > ⭐ < /span> <
        span style = {
            { fontSize: '32px' }
        } > 🏅 < /span> < /
        div > <
        p style = {
            { textAlign: 'center', color: 'var(--gray)', marginTop: '8px' }
        } >
        Viajero frecuente• 3 logros <
        /p> < /
        div >

        <
        button className = "btn btn-secondary"
        style = {
            { marginTop: '16px' }
        } > ⚙️Configuración <
        /button> < /
        div >
    )
}