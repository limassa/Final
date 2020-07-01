import React, {useState} from 'react'
import '../index.css'
import { Form, Button } from 'react-bootstrap'
import confirmarCompra from './contato'
import {BrowserRouter,Route,Link} from 'react-router-dom';


function Carrinho() {

    const lista = JSON.parse(localStorage.getItem('carrinho') ? `[${localStorage.getItem('carrinho')}]` : "")
    let total = 0

    return <div>

        {lista.map(produto => {
            
            return (
           
                        <div className="produto" style={{ marginBottom: '100px' }}>
                            <center>
                            <img className="produto-imagem" src={produto.imagem} alt="produto" />
                            <div className="produto-nome">{produto.nome} </div>
                            <div className="produto-marca">{produto.marca}</div>
                            <div className="produto-preco">${produto.preco}</div>
                            </center>                
                        </div>
            )

        })}
    
    <BrowserRouter>
    <div style={{ fontSize: '15px'}} className="btnConfirmar">
            <center>
            <button>
                <Link to="/confirmarCompra" > ConfirmarCompra</Link> 
            </button>
            <br/>
            </center>
        </div>

        <Route path='/ConfirmarCompra' component={confirmarCompra}/> 
        </BrowserRouter>
        
    </div>
   
 
}

export default Carrinho