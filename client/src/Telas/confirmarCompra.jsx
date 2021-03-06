import React from 'react';
import data from '../data';

const array = [1,2,3,4,5]

function ProductScreen (props) {
    console.log(props.match.params.id);
    const produto = data.produtos.find(x=> x._id == props.match.params._id);

    function click(){
        localStorage.setItem('carrinho', ( localStorage.getItem('carrinho')? [localStorage.getItem('carrinho'), JSON.stringify(produto)] : JSON.stringify(produto)))
        localStorage.getItem('carrinho')
        console.log('Adicione carrinho')
        let txt = "Produto Inserido"
        alert(txt)
    }

    return <div className = 'produto'>
        <center>< img className="produto-imagem" src={produto.imagem} /> </center>
        <h1 className = 'produto-nome'>{produto.nome}</h1>
        <label>{produto.marca}</label>
        <label>{produto.preco} </label>
        <button onClick={()=> click()}   style={{fontSize: '15px'} }>Adicionar ao carrinho</button>
    </div>
   
  
}
export default ProductScreen;