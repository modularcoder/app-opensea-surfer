import React from 'react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import MainPage from '../MainPage'
import config from '../../config'
import { responseSuccess } from './MainPageFixtures'

const server = setupServer(
  rest.get(`${config.openSeaApiUrl}/bundles/`, (req, res, ctx) => {
    return res(ctx.json(responseSuccess))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders list of bundle cards', async () => {
  render(<MainPage />)

  await waitFor(() => screen.getAllByRole('listitem'))

  const firstHeadingElement = screen.getByText(responseSuccess.bundles[0].name)
  const secondHeadingElement = screen.getByText(responseSuccess.bundles[1].name)
  expect(firstHeadingElement).toBeInTheDocument()
  expect(secondHeadingElement).toBeInTheDocument()
})

test('displays error message', async () => {
  server.use(
    rest.get(`${config.openSeaApiUrl}/bundles/`, (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<MainPage />)

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toBeInTheDocument()
})

//
