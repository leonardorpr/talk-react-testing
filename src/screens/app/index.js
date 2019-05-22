import React from 'react'

import { Provider } from 'react-redux'
import store from 'store'

import GlobalStyles from './styles'

import Todo from 'screens/todo'

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Todo />
  </Provider>
)

export default App
