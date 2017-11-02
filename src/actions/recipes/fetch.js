// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    dispatch(loading(true))

    api.get('/recipes')
      .then(res => {
        dispatch(loading(false))
        dispatch({ type: FETCHED_RECIPES, payload: res.body })
      })
      .catch(err => {
        console.error(err)
        dispatch(loading(false))
        dispatch(loadError(err))
      })
  }
}
