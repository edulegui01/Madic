import React from 'react'
import FilaProducto from './FilaProducto'

const ListadoProducto = (props) =>{
    return(
        props.lista.map(producto => <FilaProducto producto={producto} load={props.load} remove={props.remove}/>)
    )
}


export default ListadoProducto