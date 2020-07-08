import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import perrito from './perrito.png'

const Nav = () =>{
    return(
    <aside className="sidebar">
        <img src={perrito} style={{width:'150px',height:'150px',padding:'20px'}}/>
        <nav className="nav" >
        
                
            <Link to="/" className="link" style={{textDecoration:'none'}}>
                <i className="fas fa-home icon pr-1"></i>Inicio
            </Link>
            <Link to="/productos" className="link" style={{textDecoration:'none'}}>
            <i className="fas fa-book pr-1"></i>Productos
            </Link>

            <Link to="/empleados" className="link" style={{textDecoration:'none'}}>
                <i className="fas fa-people-carry pr-1"></i>Empleados
            </Link>
                
            <Link to="/" className="link" style={{textDecoration:'none'}}>
                <i className="fas fa-shopping-cart pr-1"></i>Compras
            </Link>

            <Link to="/" className="link" style={{textDecoration:'none'}}>
                <i className="fas fa-tasks pr-1"></i>Ventas</Link>
            
            <Link to="/" className="link" style={{textDecoration:'none'}}>
                <i className="fas fa-people-arrows pr-1"></i>Clientes
            </Link>

            <Link to="/" className="link" style={{textDecoration:'none'}}>
                <i className="fas fa-coins pr-1"></i>Ingresos
            </Link>

            <Link to="/" className="link" style={{textDecoration:'none'}}>
                <i className="fas fa-file-invoice-dollar pr-1"></i>Facturas
            </Link>
        </nav>
        
    </aside>
    )
}

export default Nav