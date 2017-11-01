// src/reducers/recipes.test.js

import { expect } from 'chai'
import recipes from './recipes'
import { SEED_RECIPES } from '../actions/recipes/seed'

describe('recipes reducer', () => {
  const reducer = recipes
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })

  it(SEED_RECIPES, () => {
    const eventualState = ['any', 'array', 'will', 'do']

    const seedAction = {
      type: SEED_RECIPES,
      payload: eventualState
    }

    expect(reducer(initialState, seedAction)).to.eql(eventualState)
  })

  it('NOT_A_VALID_ACTION_TYPE', () => {
    const initialState = ['any', 'array', 'will', 'do']
    const eventualState = [ ...initialState ]

    const nonValidAction = {
      type: 'NOT_A_VALID_ACTION_TYPE',
      payload: { foo: 'bar' }
    }

    expect(reducer(initialState, nonValidAction)).to.eql(eventualState)
  })
})
