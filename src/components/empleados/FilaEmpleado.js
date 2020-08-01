import React from 'react'

const FilaEmpleado = (props) =>{
    
    const confirmDelete = (empleados) =>{
        let respuesta = window.confirm("Estas seguro que quieres eliminar este registro?");
        if(respuesta===true){
            props.remove(empleados);            
        }
    }

    const fecha_ingre = props.empleado.fecha_ingre.substring(0,10)
    const fecha_sal = props.empleado.fecha_sal.substring(0,10)
    console.log(fecha_ingre)
    
    return(
        <tr key={props.empleado.id_empleado} style={{textAlign:'center'}} >
            <td>{props.empleado.nombre} {props.empleado.apellido}</td>
            {/* <td>{props.empleado.apellido}</td> */}
            <td>{props.empleado.cedula}</td>
            {/* <td>{props.empleado.fecha_nacimi}</td> */}
            <td>{props.empleado.telefono}</td>
            <td >{props.empleado.domicilio}</td>
            <td >{props.empleado.localidad}</td>
            <td>{fecha_ingre}</td>
            <td>{fecha_sal}</td>
            <td  >{props.empleado.email}</td>
            <td>{props.empleado.rol}</td>
            <td >
                <button className="btn btn-warning"  onClick={() => props.load(props.empleado)}>
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button className="btn btn-danger ml-2"  onClick={() => confirmDelete(props.empleado)}>
                    <i className="fas fa-trash"></i>
                </button>
            </td>

        </tr>
    )
}

export default FilaEmpleado