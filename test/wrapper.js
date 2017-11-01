import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import store from '../src/store'

export default (component) => (
  mount(
    <Provider store={store}>
      {component}
    </Provider>
  )
)
