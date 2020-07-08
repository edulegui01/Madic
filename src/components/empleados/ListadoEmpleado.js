import React from 'react'
import FilaEmpleado from './FilaEmpleado'

const ListadoEmpleado = (props) =>{
    return(
        props.lista.map(empleado => <FilaEmpleado empleado={empleado} load={props.load} remove={props.remove}/>)
    )
}


export default ListadoEmpleado