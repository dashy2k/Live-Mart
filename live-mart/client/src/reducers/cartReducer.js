import { ADD_TO_CART } from '../actions/types'

export default function cartReducer(state = [], action) {
  console.log(action)
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state }
    default:
      return []
  }
}
