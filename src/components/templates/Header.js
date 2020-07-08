import React from 'react'
import './Header.css'


const Header = (props) =>{
    
    return(
        <header className="header">
            <h1 style={{fontSize:'18px '}}>
            <i className={props.datos.icon}></i>{props.datos.titulo}
            </h1>
            <p style={{color:'rgb(131,145,146)'}}>
                {props.datos.subtitulo}
            </p>
        </header>
    )
}


export default Header