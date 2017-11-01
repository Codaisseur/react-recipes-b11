// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import SeedButton from './SeedButton'
import './RecipesContainer.css'

export class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return (
      <RecipeItem key={index} {...recipe} />
    )
  }

  render() {
    return(
      <div className="RecipesContainer">
        <header>
          <Title content="All Recipes" />
          <SeedButton />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps)(RecipesContainer)
