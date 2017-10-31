// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo } = this.props

    return(
      <article className="RecipeItem">
        <h1>{ title }</h1>
        <img src={photo} alt={title} />
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default RecipeItem
