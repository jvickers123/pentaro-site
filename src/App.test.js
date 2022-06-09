import ShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import { create } from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import App from './App'
import Home from './components/Home'

const shallow = new ShallowRenderer()



it("renders without crashing", () => {
  shallow.render(<App />)
});

it("contains title", () => {
  render(<App />)
  // expect(screen.getByText('PENTARO')).toBeInTheDocument()
})


