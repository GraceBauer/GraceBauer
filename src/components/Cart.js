import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import { Link } from 'react-router-dom';

import top_1 from '../images/top_1.JPG';
import top_2 from '../images/top_2.jpg';
import top_3 from '../images/top_3.jpeg';
import top_4 from '../images/top_4.JPG';
import top_5 from '../images/top_5.JPG';
import top_6 from '../images/top_6.jpg';
import top_7 from '../images/top_7.JPG';
import top_8 from '../images/top_8.jpeg';


function Cart({basketProps, productQuantity, clearProduct}) {
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


    const productImages = (product) => {
        if( product.tagName === 'top_1') {
            return top_1;
        } else if(product.tagName === 'top_2') {
            return top_2;
        } else if(product.tagName === 'top_3') {
            return top_3;
        } else if(product.tagName === 'top_4') {
            return top_4;
        }
         else if(product.tagName === 'top_5') {
            return top_5;
        }
         else if(product.tagName === 'top_6') {
            return top_6;
        }
         else if(product.tagName === 'top_7') {
            return top_7;
        }
         else if(product.tagName === 'top_8') {
            return top_8;
        }
        
    }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        console.log(product);
        return (
            <Fragment key={index}>
            
                <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">{product.price},00€</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>   
                </div>
                <div className="total">{product.numbers * product.price},00€</div>
            
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <h1>Warenkorb</h1>
             <div className="product-header">
                <h5 className="product-title">PRODUKT</h5>
                <h5 className="price sm-hide">PREISE</h5>
                <h5 className="quantity">MENGE</h5>
                {/* <h5 className="total">GESAMTSUMME</h5> */}
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">GESAMTSUMME:</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00€</h4>
            </div>
            <div>
                  
                    <Link to="/checkout"><button className= "button kasse">Kasse</button></Link>
                    
            </div>
               
        
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});


export default connect(mapStateToProps, { productQuantity, clearProduct } )(Cart);