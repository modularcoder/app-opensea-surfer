import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client/react'
import apolloClientService from './_services/apolloClientService'

// Styles
import './index.css'

// App component
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClientService}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
