import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('renders hero section', () => {
    render(<App />)
    expect(screen.getByText(/Brooke Brocker/i)).toBeInTheDocument()
  })
})