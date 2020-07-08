import React from 'react'

const FilaProducto = (props) =>{
    
    const confirmDelete = (productos) =>{
        let respuesta = window.confirm("Estas seguro que quieres eliminar este registro?");
        if(respuesta===true){
            props.remove(productos);            
        }
    }
    
    return(
        <tr key={props.producto.id} style={{fontSize:'16px'}}>
            <td>{props.producto.nombre}</td>
            <td style={{width:'300px'}}>{props.producto.descripcion}</td>
            <td>{props.producto.editorial}</td>
            <td>{props.producto.costo}</td>
            <td>{props.producto.precio}</td>
            <td style={{paddingLeft:'50px'}}>{props.producto.stock_actual}</td>
            <td style={{paddingLeft:'50px'}}>{props.producto.stock_minimo}</td>
            <td>
                <button className="btn btn-warning" onClick={() => props.load(props.producto)}>
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button className="btn btn-danger ml-2" onClick={() => confirmDelete(props.producto)}>
                    <i className="fas fa-trash"></i>
                </button>
            </td>

        </tr>
    )
}

export default FilaProducto