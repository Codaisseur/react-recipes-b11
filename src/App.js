import React, { Component } from 'react'
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title text="All Recipes" />
          <Title text="Some Recipes" />
          <Title text="Many Recipes" />
          <Title text="Medium Recipes" />
        </header>
        <p className="App-intro">
          Hi!
        </p>
      </div>
    )
  }
}

export default App
