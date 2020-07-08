import React from 'react'
import Nav from '../templates/Nav'
import Header from '../templates/Header'
import './Empledos.css'
import ListadoEmpleado from './ListadoEmpleado'


const header={titulo:'Empleados',subtitulo:'Agregar, Editar o Eliminar un Empleado',
icon:'fas fa-people-carry pr-1'}

const baseUrl = 'http://localhost:5000/empleado'

const initialState= {
    empleados:{nombre:'',apellido:'',cedula:'',fecha_nacimi:'',telefono:'',
                domicilio:'',localidad:'',fecha_ingre:'',fecha_sal:'',email:'',rol:''},
    list:[]
}

class Empleados extends React.Component{
    
    state = {...initialState}

    async componentDidMount(){
        let config ={
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }

        const res = await fetch(baseUrl,config)
        const json = await res.json()
        this.setState({
            list:json
        })
        console.log(json)
    }

    clear(){
        this.setState({
            empleados:initialState.empleados
        })
    }

    async save(){
        
        const empleados = this.state.empleados
        const method = empleados.id ? 'PUT' : 'POST'
        const url = empleados.id ? `${baseUrl}/${empleados.id}` : baseUrl

        empleados['cedula'] = parseInt(empleados.cedula)
        empleados['telefono'] = parseInt(empleados.telefono)
        
        let config ={
            method:method,
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(empleados)
        }

        const res = await fetch(url,config)
        const json = await res.json()
        console.log(json)
        const list = this.getUpdateList(json)
        this.setState({
            empleados: initialState.empleados,
            list
        })
    }

    getUpdateList(empleado,add=true){
        const list = this.state.list.filter(e => e.id_empleado !== empleado.id_empleado)
        if(add) list.unshift(empleado)
        return list
    }

    updateField(e){
        const empleados = {...this.state.empleados}
        empleados[e.target.name] = e.target.value
        this.setState({
            empleados
        })
    }

   load = (empleados) =>{
        this.setState({empleados})
    }
    

     remove = async (empleados) =>{
        let config ={
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }

        const res = await fetch(`${baseUrl}/${empleados.id_empleado}`,config)

        const list = this.getUpdateList(empleados,false)
        this.setState({list})
    }
    
    render(){
        return(
            <div className="home">
            <Nav></Nav>
            <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
                <Header datos={header}></Header>
                <div className="productos">
                    <div className="form">
                        <div className="row">
                            <div className="col-12 col-md-4 pl-4 pt-2">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        value={this.state.empleados.nombre}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba un nombre..."
                                    />
                                </div>

                            </div>
                            <div className="col-12 col-md-4 pt-2">
                                <div className="form-group">
                                    <label>Apellido</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        value={this.state.empleados.apellido}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el apellido..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-4 pr-4 pt-2">
                                <div className="form-group">
                                    <label>Cédula</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cedula"
                                        value={this.state.empleados.cedula}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba la cedula..."
                                    />
                                </div>

                            </div>
                            <div className="col-12 col-md-3 pl-4">
                                <div className="form-group">
                                    <label>Fecha de Nacimiento</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha_nacimi"
                                        value={this.state.empleados.fecha_nacimi}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba la fecha de nacimiento..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-3">
                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="telefono"
                                        value={this.state.empleados.telefono}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el telefono..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-3">
                                <div className="form-group">
                                    <label>Domicilio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="domicilio"
                                        value={this.state.empleados.domicilio}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el domicilio..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-3 pr-4">
                                <div className="form-group">
                                    <label>Localidad</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="localidad"
                                        value={this.state.empleados.localidad}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba la localidad..."
                                    />
                                </div>
                                

                            </div>

                            <div className="col-12 col-md-3 pr-4">
                                <div className="form-group">
                                    <label>Fecha de Ingreso</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha_ingre"
                                        value={this.state.empleados.fecha_ingre}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba la fecha de ingreso..."
                                    />
                                </div>
                                

                            </div>

                            <div className="col-12 col-md-3 pr-4">
                                <div className="form-group">
                                    <label>Fecha de Salida</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha_sal"
                                        value={this.state.empleados.fecha_sal}
                                        onChange={e => this.updateField(e)}
                                    />
                                </div>
                                

                            </div>

                            <div className="col-12 col-md-3 pr-4">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={this.state.empleados.email}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el email..."
                                    />
                                </div>
                                

                            </div>

                            <div className="col-12 col-md-3 pr-4">
                                <div className="form-group">
                                    <label>Rol</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="rol"
                                        value={this.state.empleados.rol}
                                        onChange={e => this.updateField(e)}
                                    />
                                </div>
                                

                            </div>
                        </div>
                        
                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary" onClick={e =>this.save(e)}>
                                    Guardar
                                </button>

                                <button className=" btn btn-secondary ml-2 mr-2"
                                onClick={e => this.clear(e)}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cédula</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Teléfono</th>
                                <th>Domicilio</th>
                                <th>Localidad</th>
                                <th>Fecha de Ingreso</th>
                                <th>Fecha de Salida</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListadoEmpleado lista={this.state.list} load={this.load} remove={this.remove}></ListadoEmpleado>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>     
        )
    }
}


export default Empleados