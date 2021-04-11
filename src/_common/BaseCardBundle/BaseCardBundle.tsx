import clsx from 'clsx'
import React from 'react'
import { OpenSeaAssetBundle } from 'opensea-js/lib/types'
import styles from './BaseCardBundle.module.css'

import { Link } from 'react-router-dom'
import BaseCardBundleThumbnails from './BaseCardBundleThumbnails'

export interface BaseCardBundleProps {
  data: OpenSeaAssetBundle
}

export const BaseCardBundle: React.FC<BaseCardBundleProps> = ({ data }) => {
  const { name, description, assets, slug } = data
  const firstAsset = assets[0]
  const { owner } = firstAsset

  return (
    <div
      className={clsx(
        styles.BaseCardBundle,
        'flex flex-col bg-white text-left w-full h-full rounded-lg shadow-lg mb-8',
      )}
      role="listitem"
    >
      {/* Content */}
      <div className="p-4 flex flex-1 flex-col lg:flex-row">
        {/* Thumbnails */}
        <Link
          to={{
            pathname: `/bundles/${slug}`,
          }}
        >
          <BaseCardBundleThumbnails assets={assets} />
        </Link>
        {/* Body */}
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h3
              className={clsx(
                styles.Name,
                'mb-4 h-14 flex-auto text-lg text-indigo-600 font-semibold break-all',
              )}
            >
              {name}
            </h3>
          </div>
          <p
            className={clsx(
              styles.Description,
              'text-sm text-gray-500 break-all overflow-ellipsis',
            )}
          >
            {description}
          </p>
        </div>
      </div>
      {/* Footer */}
      <div
        className="
          flex flex-grow-0 p-4
          flex-row
          justify-between
          rounded-b-lg
          bg-gray-600
        "
      >
        <div className="text-white text-opacity-70 text-xs">Assets: {assets.length}</div>
        <div className="text-white text-opacity-70 text-xs hidden lg:block">
          Owner: {owner.address}
        </div>
      </div>
    </div>
  )
}
