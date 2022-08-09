import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import { useNavigate } from 'react-router-dom';

function Checkout({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);
    

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });


    productsInCart = productsInCart.map( (product, index) => {
        console.log("mein Produkt");
        console.log(product);
    });

    const navigate=useNavigate()
    let counter = 0
    function clickHandler(){
        
      
        navigate("/exit")
    }
    

    return (
        <div className="container-products">
                <h1>KASSE</h1>
                <div className="product-header">
                    <h5 className="product-title"></h5>
                    <h5 className="price sm-hide"></h5>
                    <h5 className="quantity"></h5>
                    <h5 className="total">SUMME:</h5> 
                </div>
                <div className="products">
                    { productsInCart }
                </div>
                <div className="basketTotalContainer">
                    <h4 className="basketTotalTitle"></h4>
                    <h4 className="basketTotal">{basketProps.cartCost},00€</h4>
                </div>
                
            <div className="container">

                <div className="form">
                    <form id="form" action="js/main.js" method="get">
                        <fieldset>
                            <legend>bitte Formular ausfüllen</legend>

                                <div className="form_element_wrapper w100">
                                <input type="text" name="name" id="name" placeholder="Vorname"/>
                                </div>

                                <div className="form_element_wrapper w100">
                                <input type="tel" name="tel" id="tel" placeholder="Nachname"/>
                                </div> 

                                <div className="form_element_wrapper w50">
                                <input type="email" name="email" id="email" placeholder="Straße "/>
                                </div> 
                                <div className="form_element_wrapper w50">
                                <input type="email" name="email" id="email" placeholder="Nr."/>
                                </div>

                                <div className="form_element_wrapper w50">
                                <input type="email" name="email" id="email" placeholder="PZL "/>
                                </div> 

                                <div className="form_element_wrapper w50">
                                <input type="email" name="email" id="email" placeholder="Stadt"/>
                                </div>

                                <div className="form_element_wrapper w100">
                                <input type="email" name="email" id="email" placeholder="E-Mail-Addresse"/>
                                </div> 

                                <div className="form_element_wrapper w100">
                                <input type="email" name="email" id="email" placeholder="Telefon"/>
                                </div>

                                <div className="clear"></div> 

                                <div>
                                <button onClick={clickHandler} className= "button primary">Bestellung abschließen</button>
                                </div>
                        </fieldset>
                    </form>
                </div> 
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});


export default connect(mapStateToProps, { productQuantity, clearProduct } )(Checkout);
