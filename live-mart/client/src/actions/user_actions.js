import axios from "axios";
import{
    ADD_TO_CART_USER
}from './types'
import { USER_SERVER } from '../components/config.js'

export function addToCart(id) {
    const request=axios.get(`${USER_SERVER}/addToCart?productId=${id}`)
    .then(response=>response.data);
    return{
        type:ADD_TO_CART_USER,
        payload: request
    }
}