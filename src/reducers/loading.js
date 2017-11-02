import { LOADING } from '../actions/loading'

export default (currentState = false, { type, payload } = {}) => {
  switch(type) {
    case LOADING :
      return !!payload
  
    default :
      return currentState
  }
}
