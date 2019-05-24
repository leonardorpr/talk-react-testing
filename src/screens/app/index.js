import React from 'react'

import { Provider } from 'react-redux'
import store from 'store'

import GlobalStyles from './styles'

import Tasks from 'screens/tasks'

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Tasks />
  </Provider>
)

export default App
