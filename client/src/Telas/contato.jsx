import React, {useState} from 'react'
import axios from 'axios'
import '../index.css'

import { Form, Button } from 'react-bootstrap'

function Carrinho() {
    const [cep, setCep] = useState({})
    const [nomeInput, setNomeInput] = useState('')
    const [cartaoInput, setCartaoInput] = useState('')
    const [codigoInput, setCodigoInput] = useState('')
    const [dataInput, setDataInput] = useState('')
    

    const [cepInput, setCepInput] = useState('')

    const lista = JSON.parse(localStorage.getItem('carrinho') ? `[${localStorage.getItem('carrinho')}]` : "")
    let total = 0

    function buscarCep(){
        axios.get(`http://localhost:3001/cep/${cepInput}`)
        .then( (result)=> {
            setCep(result.data)
            console.log(result.data)

        })
        .catch( (err)=> {
            console.log(err)
        })
    }

    function terminar(){
        let txt = `Compra Concluída com Sucesso!!!!` 
        
        localStorage.setItem('carrinho', "[]")
        alert(txt)
    
    }

    return <div>
      <div className="fale-conosco">
        <form>
          <div className="Contato">
                  
                   <div className='group-item'>
                  <br/><label>
                  Nome Completo:
                  <br/><input  type='text' placeholder='Informe seu nome' />
                  </label><br/>
                </div>

                <div className='group-item'>
                  <label>
                  <br/> E-mail:  
                  <br/><input  type='text' placeholder='Informe seu e-mail' /><br/>
                  </label>
                </div>

                <div className='group-item'>
                  <label>
                  <br/> Telefone:  
                  <br/><input  type="text" data-mask="(00)00000-0000" data-mask-selectonfocus="true" placeholder='(00)00000-0000' /><br/>
                  </label>
                </div>

                <div className='group-item'>
                  <label>
                  <br/> CEP:  
                  <br/><input  type="text"  onChange={(e)=> setCepInput(e.target.value)} placeholder='Informe seu CEP' />
                  </label>
                </div>
                
            <Button variant="primary" onClick={()=> buscarCep()}>
                BUSCAR
            </Button>

            <br/>
                <label>Cidade: </label><br/>
                <input id="cidade" disabled value={cep.city} placeholder= "Cidade"/><br/>
                <label>Estado: </label><br/>
                <input id="estado" disabled value={cep.state} placeholder= "Estado"/><br/>
                <label>Bairro: </label><br/>
                <input id="bairro" disabled value={cep.neighborhood} placeholder= "Bairro"/><br/>
                <label>Rua: </label><br/>
                <input id="rua" disabled value={cep.street} placeholder= "Rua"/><br/>
               
                <div className='group-item'>
                    <br/><label>
                  Número:
                  <br/><input  type='text' placeholder='Informe o número' />
                  </label><br/>
              </div>
             
              <div className='group-item'>
              <br/><label>
                Complemento:
                <br/><input  type='text' placeholder='Informe o complemento' />
                </label><br/><br/>
            </div>

            <Button variant="primary" onClick={()=> terminar()} type="submit">
                    ENVIAR
                </Button>

            </div>

        </form>

      </div>

       
    </div>
}

export default Carrinho