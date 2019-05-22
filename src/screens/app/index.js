import React from 'react'

import { Provider } from 'react-redux'
import store from 'store'

import GlobalStyles from './styles'

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    Hello World
  </Provider>
)

export default App
