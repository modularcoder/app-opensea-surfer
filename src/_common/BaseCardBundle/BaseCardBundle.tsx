import React from 'react'
import { OpenSeaAssetBundle } from 'opensea-js/lib/types'

export interface BaseCardBundleProps {
  data: OpenSeaAssetBundle
}

export const BaseCardBundle: React.FC<BaseCardBundleProps> = ({ data }) => {
  const { name } = data

  return <div>{name}</div>
}
