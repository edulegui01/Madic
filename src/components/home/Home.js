import React from 'react'
import Nav from '../templates/Nav'
import Header from '../templates/Header'
import './Home.css'
const header={titulo:'Inicio',subtitulo:'Bienvenido',
icon:'fas fa-home pr-1'}

const Home = () =>{
    return(
        <div className="home" style={{height:'1000%'}}>
            <Nav></Nav>
            <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
                <Header datos={header}></Header>
                
                
            </div>
        </div>
    )
}

export default Home