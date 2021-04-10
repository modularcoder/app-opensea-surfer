import { HttpLink, ApolloLink, ApolloClient, InMemoryCache, concat } from '@apollo/client'

const httpLink = new HttpLink({ uri: 'https://api.opensea.io/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      // authorization: localStorage.getItem('token') || null,
      'x-api-key': '0106d29713754b448f4513d7a66d0875',
      'x-build-id': 'gA-1NpYxz96R_JcEek0bq',
    },
  })

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
})

// const client = new ApolloClient({
//   uri: 'https://api.opensea.io/graphql',
//   cache: new InMemoryCache(),
// })

export default client
