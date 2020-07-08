import React from 'react'
import Nav from '../templates/Nav'
import Header from '../templates/Header'
import './Products.css'
import ListadoProducto from './ListadoProducto'


const header={titulo:'Productos',subtitulo:'Agregar, Editar o Eliminar un Producto',
icon:'fas fa-book pr-1'}

const baseUrl = 'http://localhost:5000/producto'

const initialState= {
    productos:{nombre:'',descripcion:'',editorial:'',costo:'',precio:'',
                stock_actual:'',stock_minimo:''},
    list:[]
}

class Products extends React.Component{
    
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
            productos:initialState.productos
        })
    }

    async save(){
        
        const productos = this.state.productos
        const method = productos.id ? 'PUT' : 'POST'
        const url = productos.id ? `${baseUrl}/${productos.id}` : baseUrl

        productos['costo'] = parseInt(productos.costo)
        productos['precio'] = parseInt(productos.precio)
        productos['stock_actual'] = parseInt(productos.stock_actual)
        productos['stock_minimo'] = parseInt(productos.stock_minimo)
        let config ={
            method:method,
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(productos)
        }

        const res = await fetch(url,config)
        const json = await res.json()

        const list = this.getUpdateList(json)
        this.setState({
            productos: initialState.productos,
            list
        })
    }

    getUpdateList(producto,add=true){
        const list = this.state.list.filter(p => p.id !== producto.id)
        if(add) list.unshift(producto)
        return list
    }

    updateField(e){
        const productos = {...this.state.productos}
        productos[e.target.name] = e.target.value
        this.setState({
            productos
        })
    }

   load = (productos) =>{
        this.setState({productos})
    }
    

     remove = async (productos) =>{
        let config ={
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }

        const res = await fetch(`${baseUrl}/${productos.id}`,config)

        const list = this.getUpdateList(productos,false)
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
                                        value={this.state.productos.nombre}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba un nombre..."
                                    />
                                </div>

                            </div>
                            <div className="col-12 col-md-4 pt-2">
                                <div className="form-group">
                                    <label>Descripcion</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="descripcion"
                                        value={this.state.productos.descripcion}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba una descripcion..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-4 pr-4 pt-2">
                                <div className="form-group">
                                    <label>Editorial</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="editorial"
                                        value={this.state.productos.editorial}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba la editorial..."
                                    />
                                </div>

                            </div>
                            <div className="col-12 col-md-3 pl-4">
                                <div className="form-group">
                                    <label>Costo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="costo"
                                        value={this.state.productos.costo}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el costo..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-3">
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="precio"
                                        value={this.state.productos.precio}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el precio..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-3">
                                <div className="form-group">
                                    <label>Stock Actual</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="stock_actual"
                                        value={this.state.productos.stock_actual}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el Stock..."
                                    />
                                </div>

                            </div>

                            <div className="col-12 col-md-3 pr-4">
                                <div className="form-group">
                                    <label>Stock Minimo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="stock_minimo"
                                        value={this.state.productos.stock_minimo}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Escriba el Stock Minimo..."
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
                                <th>Descripcion</th>
                                <th>Editorial</th>
                                <th>Costo</th>
                                <th>Precio</th>
                                <th>Stock Actual</th>
                                <th>Stock Minimo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListadoProducto lista={this.state.list} load={this.load} remove={this.remove}></ListadoProducto>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>     
        )
    }
}


export default Products