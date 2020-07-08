import React from 'react'
import Nav from './components/templates/Nav'
import Main from './components/templates/Main'
import './App.css'
import Header from './components/templates/Header'

const App = (props) =>{
    const {datos} = props
    return(
        console.log(props),
        <div className="appstyle">
            <Nav ></Nav>
            <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
                <Header datos={datos}></Header>           
                <Main ></Main>
            </div>
        </div>
    )
}


export default App