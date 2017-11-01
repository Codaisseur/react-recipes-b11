import { SEED_RECIPES } from '../actions/recipes/seed'

export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case  SEED_RECIPES:
      return [ ...payload ]

    default :
      return currentState
  }
}
