import clsx from 'clsx'
import React from 'react'
import { OpenSeaAssetBundle } from 'opensea-js/lib/types'
import styles from './BaseCardBundle.module.css'

import BaseCardBundleMedia from './BaseCardBundleMedia'

export interface BaseCardBundleProps {
  data: OpenSeaAssetBundle
}

export const BaseCardBundle: React.FC<BaseCardBundleProps> = ({ data }) => {
  const { name, description, assets } = data
  const firstAsset = assets[0]
  const secondAsset = assets[1] || undefined
  const { owner } = firstAsset
  const numAssetsMore = Math.max(assets.length - 1, 0)

  return (
    <div
      className={clsx(
        styles.BaseCardBundle,
        'flex flex-col bg-white text-left w-full h-full rounded-lg shadow-lg mb-8',
      )}
      role="listitem"
    >
      {/* Content */}
      <div className="flex flex-1 p-4 md:flex-col lg:flex-row">
        {/* Thumbnails */}
        <div
          className={clsx(
            styles.ThumbnailsContainer,
            'flex-none lg:w-40 xl:w-48 relative',
          )}
        >
          <div
            className={clsx(
              styles.ThumbnailPrimary,
              'lg:w-40 xl:w-48 h-32 bg-white shadow-md overflow-hidden rounded relative z-20',
            )}
          >
            <BaseCardBundleMedia
              src={firstAsset.imagePreviewUrl}
              className={styles.ThumbnailImg}
            />
          </div>
          <div
            className={clsx(
              styles.ThumbnailSecondary,
              'lg:w-40 xl:w-48 h-32 bg-white shadow-md overflow-hidden rounded absolute top-0 z-0',
            )}
          >
            {numAssetsMore && (
              <>
                <div
                  className="
                  absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2
                  p-10
                  rounded-full
                bg-gray-900 text-white
                  whitespace-nowrap
                  opacity-80
                  z-10
                "
                ></div>
                <span className="absolute right-2 bottom-2 text-xs z-20 font-semibold">
                  +{numAssetsMore}
                </span>
              </>
            )}
            <BaseCardBundleMedia
              src={secondAsset.imagePreviewUrl}
              className={styles.ThumbnailImg}
            />
          </div>
        </div>
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
