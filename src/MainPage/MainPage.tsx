import React from 'react'
import { useMainPageData } from './mainPageData'

import { BaseCardBundle } from '../_common/BaseCardBundle/BaseCardBundle'

export const MainPage = () => {
  const { loading, error, data } = useMainPageData()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      Main Page
      {data.bundles.map((bundle, index) => {
        return <BaseCardBundle key={index} data={bundle} />
      })}
    </div>
  )
}

export default MainPage
