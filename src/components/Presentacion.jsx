function Presentacion({usuario}){
    return(
        <article className='presentacion'>
                <h1> Hola, {usuario.nombre}</h1>
                <p> Vivo en el barrio {usuario.barrio}</p>
                <h3>Mis datos son</h3>
                <ul>
                    <>
                    <li> correo : {usuario.correo}</li>
                    <li> telefono : {usuario.telefono}</li>
                    </>
                </ul>
                <h3>Soy {usuario.rol}</h3>
                <nav>
                    <a href=""></a>
                </nav>
        </article>
    )
}

export default Presentacion