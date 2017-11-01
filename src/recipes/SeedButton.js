import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import seedRecipes from '../actions/recipes/seed'

class SeedButton extends PureComponent {
  render() {
    if (this.props.hide) { return null }

    return (
      <button
        onClick={this.props.seedRecipes}
      >
        Seed Recipes!
      </button>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({
  hide: recipes.length > 0
})

export default connect(mapStateToProps, { seedRecipes })(SeedButton)
