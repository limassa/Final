import React, {useState} from 'react';


class Contato extends React.Component{

constructor (props: any){

  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  state = {
    address : {
      cep: "",
      city: "",
      neighborhood:"",
      state:"",
      street:""
    },
    cepInput:""
  }

onInputChange(event: any){
    this.setState({
      cepInput:  event.target.value
    })

  console.log(this.state.address.cep)
}

handleSubmit (event: any){
    fetch(`http://localhost:3001/cep?value=${this.state.cepInput}`)
    .then (
      res =>res.json()
      ).then( addresssFromApi =>{
        this.setState ({
          address: addresssFromApi
        })
          console.log(addresssFromApi)
          console.log(this.state.address.cep)
          console.log(this.state.address.city)
          console.log(this.state.address.state)
          console.log(this.state.address.neighborhood)
          console.log(this.state.address.street)

      })
      .catch(error => {
        console.log(error);
      })
      ;
    event.preventDefault();
}


render (){


  return (
    <div className='fale-conosco'>
         
        <form onSubmit={this.handleSubmit}>
          
        <div className="Contato">
			<div className='group-item'>
        <label>
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
				<br/><input  type="text"  onChange={event => this.onInputChange(event)} placeholder='Informe seu CEP' />
        </label>
      </div>

          <input type="submit" value="Buscar CEP"/>
          <br/>
          <label>Cidade: </label><br/>
          <input id="cidade" disabled value={this.state.address.city} placeholder= "Cidade"/><br/>
          <label>Estado: </label><br/>
          <input id="estado" disabled value={this.state.address.state} placeholder= "Estado"/><br/>
          <label>Bairro: </label><br/>
          <input id="bairro" disabled value={this.state.address.neighborhood} placeholder= "Bairro"/><br/>
          <label>Rua: </label><br/>
          <input id="rua" disabled value={this.state.address.street} placeholder= "Rua"/><br/>
          
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
        </label><br/>
      </div>
      
        </div>

        </form>    
      
    </div>
  )
};
}

export default Contato;
