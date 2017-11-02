import React from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import Loading from './components/Loading'

class App extends React.Component {
  render() {
    return (
      <div>
        <RecipesContainer />
        <Loading />
      </div>
    )
  }
}

export default App
