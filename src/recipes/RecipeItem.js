// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { like } from '../actions/recipes'
import LikeButton from '../components/LikeButton'
import RecipeCategory from './RecipeCategory'
import Title from '../components/Title'
import './RecipeItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  toggleLike = () => {
    this.props.toggleLike(this.props._id)
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo, liked } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="RecipeItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          <Title content={title} className="level-2" />
          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>

        <div>
          <p>{ summary }</p>
        </div>
        <footer>
          <LikeButton liked={liked} onChange={this.toggleLike} />
        </footer>
      </article>
    )
  }
}

export default connect(null, { toggleLike: like })(RecipeItem)
