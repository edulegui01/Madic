import React from 'react'

const FilaEmpleado = (props) =>{
    
    const confirmDelete = (empleados) =>{
        let respuesta = window.confirm("Estas seguro que quieres eliminar este registro?");
        if(respuesta===true){
            props.remove(empleados);            
        }
    }
    
    return(
        <tr key={props.empleado.id_empleado} style={{fontSize:'16px'}}>
            <td>{props.empleado.nombre}</td>
            <td style={{width:'300px'}}>{props.empleado.apellido}</td>
            <td>{props.empleado.cedula}</td>
            <td>{props.empleado.fecha_nacimi}</td>
            <td>{props.empleado.telefono}</td>
            <td style={{paddingLeft:'50px'}}>{props.empleado.domicilio}</td>
            <td style={{paddingLeft:'50px'}}>{props.empleado.localidad}</td>
            <td>{props.empleado.fecha_ingre}</td>
            <td>{props.empleado.fecha_sal}</td>
            <td>{props.empleado.email}</td>
            <td>{props.empleado.rol}</td>
            <td>
                <button className="btn btn-warning" onClick={() => props.load(props.empleado)}>
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button className="btn btn-danger ml-2" onClick={() => confirmDelete(props.empleado)}>
                    <i className="fas fa-trash"></i>
                </button>
            </td>

        </tr>
    )
}

export default FilaEmpleado