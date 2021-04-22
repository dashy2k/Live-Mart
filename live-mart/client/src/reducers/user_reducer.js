import{
    ADD_TO_CART_USER
}from '../actions/types';


export default function(state={},action){
    console.log("cart add");
    switch(action.type){
    case ADD_TO_CART_USER:
        
        return {...state}
    }
}