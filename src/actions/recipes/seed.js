import recipes from '../../fixtures/recipes'

export const SEED_RECIPES = 'SEED_RECIPES'

export default () => ({
  type: SEED_RECIPES,
  payload: recipes
})
