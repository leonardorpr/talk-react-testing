import React from 'react'
import { render } from 'react-testing-library'

import App from 'screens/app'

describe('[SCREENS] App', () => {
  it('Should render correctly', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
