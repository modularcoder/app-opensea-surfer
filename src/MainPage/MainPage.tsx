import React from 'react'
import { useMainPageData } from './mainPageData'

import { BaseCardBundle } from '../_common/BaseCardBundle/BaseCardBundle'

export const MainPage = () => {
  const { loading, error, data } = useMainPageData()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.bundles.map((bundle, index) => {
          return (
            <div key={index}>
              <BaseCardBundle data={bundle} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainPage