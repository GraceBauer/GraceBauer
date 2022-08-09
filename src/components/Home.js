import React from 'react';
import top_1 from '../images/top_1.JPG';
import top_2 from '../images/top_2.jpg';
import top_3 from '../images/top_3.jpeg';
import top_4 from'../images/top_4.JPG';
import top_5 from '../images/top_5.JPG';
import top_6 from '../images/top_6.jpg';
import top_7 from '../images/top_7.JPG';
import top_8 from '../images/top_8.jpeg';


import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

function Home(props) {
  console.log(props);
  return ( 
  <div>
    <h2>Shop</h2>
    <div className="container">
        
        <div className="image">
          <img src={top_1} alt="top_1"></img>
          <h3>top_1.JPG</h3>
          <h3>15,00€</h3>
          <a  onClick={() => props.addBasket("top_1")} className="addToCart cart2" className="addToCart cart1" href="#">In den Warenkorb</a>
        </div>

        <div className="image">
          <img src={top_2} alt="top_2"></img>
          <h3>top_2</h3>
          <h3>17,00€</h3>
          <a  onClick={() => props.addBasket("top_2")} className="addToCart cart2"  href="#">In den Warenkorb</a>
        </div>

        <div className="image">
          <img src={top_3} alt="top_3"></img>
          <h3>top_3</h3>
          <h3>25,00€</h3>
          <a onClick={() => props.addBasket("top_3")} className="addToCart cart3" href="#">In den Warenkorb</a>
        </div>

        <div className="image">
          <img src={top_4} alt="top_4"></img>
          <h3>top_4.JPGg</h3>
          <h3>25,00€</h3>
          <a onClick={() => props.addBasket("top_4")} className="addToCart cart3" href="#">In den Warenkorb</a>
        </div>

        <div className="image">
          <img src={top_5} alt="top_5"></img>
          <h3>top_5</h3>
          <h3>20,00€</h3>
          <a onClick={() => props.addBasket("top_5")} className="addToCart cart4" href="#">In den Warenkorb</a>
        </div>

        <div className="image">
          <img src={top_6} alt="top_6"></img>
          <h3>top_6</h3>
          <h3>17,00€</h3>
          <a onClick={() => props.addBasket("top_6")} className="addToCart cart4"
           href="#">In den Warenkorb</a>
        </div>
        
          <div className="image">
          <img src={top_7} alt="top_7"></img>
          <h3>modernes_t-shirt.jpeg</h3>
          <h3>20,00€</h3>
          <a onClick={() => props.addBasket("top_7")}
          className="addToCart cart4"
           href="#">In den Warenkorb</a>
        </div>

        <div className="image">
          <img src={top_8} alt="top_8"></img>
          <h3>top_8</h3>
          <h3>20,00€</h3>
          <a onClick={() => props.addBasket("top_8")}
          className="addToCart cart4"
           href="#">In den Warenkorb</a>
        </div> 
    </div>
  </div>
  );
}

export default connect(null, { addBasket })(Home);