import { useState, useEffect, useCallback } from 'react'
import openSeaService from '../_services/openSeaService'

import { OpenSeaAssetBundle } from 'opensea-js/lib/types'
// import { Category } from '../_types'

export interface IBundlePageData extends OpenSeaAssetBundle {}

export interface IBundlePage {
  data: IBundlePageData | null
  error: Error | null
  loading: Boolean
}

export const useBundlePageData = (bundleSlug: string): IBundlePage => {
  const [data, setData] = useState<IBundlePageData | null>(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const requestData = useCallback(async () => {
    setError(null)
    setLoading(true)

    try {
      const bundle = await openSeaService.api.getBundle({ slug: bundleSlug })

      setData(bundle)
    } catch (err) {
      setError(err)
    }

    setLoading(false)
  }, [bundleSlug])

  useEffect(() => {
    requestData()
  }, [requestData])

  return { error, data, loading }
}
