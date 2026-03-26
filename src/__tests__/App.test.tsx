import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import App from '../App'
import { getWelcomeMessage } from '../utils'

// Mock the utils module
vi.mock('../utils', () => ({
  getWelcomeMessage: vi.fn(),
}))

describe('App', () => {
  test('renders welcome message', () => {
    // Set up the mock to return a specific value
    getWelcomeMessage.mockReturnValue('Hello, World!')
    
    render(<App />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
    
    // Verify the mock was called
    expect(getWelcomeMessage).toHaveBeenCalledTimes(1)
  })
})