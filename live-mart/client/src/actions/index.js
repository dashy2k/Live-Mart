import axios from 'axios'
import { FETCH_USER, ADD_TO_CART } from './types'

export const fetchUser = () => async dispatch => {
  console.log('fetchUserUsed')
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const addToCart = (productId,product,quantity,price,img) => async dispatch => {
  console.log('addToCartUsed')
  const res = await axios
    .get(
      '/api/current_user/actions/addToCart?productId=' +
        productId +
        '&product=' +
        product +
        '&quantity=' +
        quantity +
        '&price=' +
        price +
        '&img=' +
        encodeURI(img)
    )

  dispatch({ type: ADD_TO_CART, payload: res.data })

}
