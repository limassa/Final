import React, { Component } from 'react'
import img1 from '../img/Produtos/1.jpg'
import img2 from '../img/Produtos/2.jpg'
import img3 from '../img/Produtos/3.jpg'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class Produtos extends Component {
    render() {
        return (
         
          <div className="imagens">
            
            <Carousel>
              
                <div>
                    <img src={img1}/>
                    <p className="legend">Chuteiras</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Camisas</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Conjuntos</p>
                </div>
            </Carousel>
            </div>
        );
    }
};

export default Produtos;




