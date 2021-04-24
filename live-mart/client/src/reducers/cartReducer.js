import { ADD_TO_CART } from '../actions/types'
import { CHECKOUT } from './../actions/types';

export default function cartReducer(state = {cart : []}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state,cart : [...state.cart,action.payload]}
    case CHECKOUT :
      return state
    default:
      return state
  }
}
