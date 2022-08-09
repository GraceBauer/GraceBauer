import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        top_1: {
            name: "top_1",
            tagName: 'top_1',
            price: 15.00,
            numbers: 0,
            inCart: false
        }, 
           top_2: {
            name: "top_2",
            tagName: 'top_2',
            price: 17.00,
            numbers: 0,
            inCart: false
        },  
        top_3: {
            name: "top_3",
            tagName: 'top_3',
            price: 25.00,
            numbers: 0,
            inCart: false
        },

     
        top_4: {
            name: "top_4",
            tagName: 'top_4',
            price: 25.00,
            numbers: 0,
            inCart: false
        },
        top_5: {
            name: "top_5",
            tagName: 'top_5',
            price: 25.00,
            numbers: 0,
            inCart: false
        }, 
        top_6: {
            name: "top_6",
            tagName: 'top_6',
            price: 17.00,
            numbers: 0,
            inCart: false
        },
        top_7: {
            name: "top_7",
            tagName: 'top_7',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
       
          top_8: {
            name: "top_8",
            tagName: 'top_8',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
       
    } 
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]}
            
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
              
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
                                              
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if( productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers - 1
            }
            
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT: 
            productSelected = { ...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost: state.cartCost - ( numbersBackup * productSelected.price ),
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        default:
            return state;
    }
  
}