import {
  SEED_RECIPES,
  TOGGLE_LIKE_RECIPE,
  FETCHED_RECIPES
} from '../actions/recipes'


export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case  FETCHED_RECIPES:
    case  SEED_RECIPES:
      return [ ...payload ]

    case TOGGLE_LIKE_RECIPE :
      return currentState.map((recipe) => {
        if (recipe._id === payload) {
          return { ...recipe, liked: !recipe.liked }
        }

        return recipe
      })

    default :
      return currentState
  }
}
