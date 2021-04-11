import React from 'react'
import { useParams } from 'react-router-dom'

import { useBundlePageData } from './bundlePageData'

interface IRouteParams {
  bundleSlug: string
}

export const BundlePage = () => {
  const { bundleSlug } = useParams<IRouteParams>()
  const { data, error, loading } = useBundlePageData(bundleSlug)

  if (loading) return <p>Loading bundle...</p>
  if (error) return <p role="alert">Error :( ({error.message})</p>

  return (
    <div className="container">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default BundlePage
