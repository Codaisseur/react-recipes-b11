// src/recipes/RecipeItem.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeCategory from './RecipeCategory'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'

chai.use(chaiEnzyme())

const categories = {
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<RecipeCategory />', () => {
  const container = shallow(<RecipeCategory { ... categories} />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('li')
    expect(container).to.have.className('RecipeCategory')
  })

  it('contains a the title', () => {
    expect(container.find('li')).to.have.text('Vegetarian')
  })

  it("shows a Vegetarian icon  when it is vegetarian", () => {
    expect(container.find('img')).to.have.attr('src', Vegetarian)
  })

  it("shows a Vegan icon  when it is vegan", () => {
    const container = shallow(<RecipeCategory { ...categories } vegan={true} />)
    expect(container.find('img')).to.have.attr('src', Vegan)
  })

  it("shows a Pescatarian icon  when it is pescatarian", () => {
    const container = shallow(<RecipeCategory { ...categories } pescatarian={true} vegetarian={false} />)
    expect(container.find('img')).to.have.attr('src', Pescatarian)
  })
})
