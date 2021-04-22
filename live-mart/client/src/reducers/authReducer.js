import { FETCH_USER } from '../actions/types';

export default function authReducer(state = false, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return false;
  }
}