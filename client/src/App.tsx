import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Telas/Home';
import Produtos from './Telas/Produtos';
import Carrinho from './Telas/Carrinho'
import 'primeicons/primeicons.css'

function App() {
     
const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open")
}
 const closeMenu = () => {
  document.querySelector(".sidebar")?.classList.remove("open")
 }

  return (
      <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            
            <Link to="/" className="pi pi-home"></Link>        
        </div>
           <div className="header-link" style={{fontSize: '20px'}}>
           <a className="pi pi-shopping-cart" href="/carrinho"></a>
          </div>
          </header>
           <aside className="sidebar">
               <h3>Categorias</h3>
               <button className="sidebar-close-button" onClick={closeMenu}>x</button> 
              <ul>
                  <li>
                      <a href="index.html">Futebol</a>
                  </li>
              </ul>
           </aside>
              <main className="main">
                  <div className="content">
                      
                      <Route path="/produtos/:_id" component={Produtos} />
                      <Route path="/" exact={true} component={Home}/>
                      <Route path='/carrinho' component={Carrinho}/> 
                
                 
              </div>

           </main>
           <footer className="footer">
               Tudo para seu esporte favorito!!
           </footer>

  </div>
  </BrowserRouter>
  );
}

export default App;
