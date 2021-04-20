import { FETCH_USER } from '../actions/types';

export default function(state = false, action) {
  console.log(action)
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return false;
  }
}