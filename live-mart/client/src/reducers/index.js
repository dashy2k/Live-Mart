import { combineReducers } from 'redux'
import authReducer from './authReducer'
import addToCartReducer from './addToCartReducer'

export default combineReducers({auth : authReducer,addToCart : addToCartReducer})
