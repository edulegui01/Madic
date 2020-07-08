import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Empleados from './components/empleados/Empleados'

class Routes extends React.Component{
    render(){
        return(
            <div className="appindex">
            <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/productos" component={Products}/>
                <Route exact path="/empleados" component={Empleados}/>
            </Router>
            </div>
        )
    }
}

export default Routes