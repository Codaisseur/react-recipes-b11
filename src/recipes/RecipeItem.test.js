// src/recipes/RecipeItem.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'

chai.use(chaiEnzyme())

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('RecipeItem')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })

  it("shows a Vegetarian icon  when it is vegetarian", () => {
    expect(container.find('ul > li > img')).to.have.attr('src', Vegetarian)
  })

  it("shows a Vegan icon  when it is vegan", () => {
    const container = shallow(<RecipeItem { ...recipe } vegan={true} />)
    expect(container.find('ul > li > img')).to.have.attr('src', Vegan)
  })

  it("shows a Pescatarian icon  when it is pescatarian", () => {
    const container = shallow(<RecipeItem { ...recipe } pescatarian={true} vegetarian={false} />)
    expect(container.find('ul > li > img')).to.have.attr('src', Pescatarian)
  })
})
