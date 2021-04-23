import { ADD_TO_CART } from '../actions/types'

export default function cartReducer(state = {cart : []}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state,cart : [...state.cart,action.payload]}
    default:
      return state
  }
}
