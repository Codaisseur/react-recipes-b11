// src/App.test.js
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

describe('<App />', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    )
  })
})
