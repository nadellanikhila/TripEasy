import { render } from '@testing-library/react'
import React from 'react'
import App from '../App'

it('should ', async () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('app')).toBeDefined()
})