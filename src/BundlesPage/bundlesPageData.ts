import { useQuery, gql } from '@apollo/client'
import { useState, useEffect, useCallback } from 'react'
import openSeaService from '../_services/openSeaService'

import { OpenSeaAssetBundle } from 'opensea-js/lib/types'
// import { Category } from '../_types'

export interface IMainPageData {
  bundles: OpenSeaAssetBundle[]
}

export interface IMainPage {
  data: IMainPageData
  error: Error | null
  loading: Boolean
}

export const useBundlesPageData = (): IMainPage => {
  const [data, setData] = useState<IMainPageData>({ bundles: [] })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const requestData = useCallback(async () => {
    setError(null)
    setLoading(true)

    try {
      const { bundles } = await openSeaService.api.getBundles()

      setData({ bundles })
    } catch (err) {
      setError(err)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    requestData()
  }, [requestData])

  return { error, data, loading }
}

// Try with apollo
// Unfortunately the server redirects

const CATEGORIES = gql`
  query {
    categories {
      id
      imageUrl
      name
      slug
      description
      shortDescription
    }
  }
`

export const useMainPageDataFromGraphQL = () => {
  const { loading, error, data } = useQuery(CATEGORIES)

  return { loading, error, data }
}
