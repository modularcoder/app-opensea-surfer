import React from 'react'
import { useParams } from 'react-router-dom'
import { useBundlesPageData } from './bundlesPageData'

import { BaseCardBundle } from '../_common/BaseCardBundle/BaseCardBundle'
import { ModalBundleItem } from '../_common/ModalBundleItem/ModalBundleItem'

interface IRouteParams {
  bundleSlug: string
}

export const BundlesPage = () => {
  const { bundleSlug } = useParams<IRouteParams>()
  const { loading, error, data } = useBundlesPageData()

  if (loading) return <p>Loading bundles...</p>
  if (error) return <p role="alert">Error :( ({error.message})</p>

  const { bundles } = data
  const bundleSelected = bundleSlug
    ? bundles.find((bundle) => bundle.slug === bundleSlug) || null
    : null

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
        {data.bundles.map((bundle, index) => {
          return (
            <div key={index} className="pb-4">
              <BaseCardBundle data={bundle} />
            </div>
          )
        })}
      </div>

      {bundleSelected && <ModalBundleItem bundle={bundleSelected} />}
    </div>
  )
}

export default BundlesPage
