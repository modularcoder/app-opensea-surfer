import React from 'react'
import { useMainPageData } from './mainPageData'

export const MainPage = () => {
  const { loading, error, data } = useMainPageData()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      Main Page
      {data.bundles.map((bundle, index) => {
        return <li key={index}>bundle</li>
      })}
    </div>
  )
}

export default MainPage
