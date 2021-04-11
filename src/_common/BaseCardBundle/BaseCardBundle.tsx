import clsx from 'clsx'
import React from 'react'
import { OpenSeaAssetBundle } from 'opensea-js/lib/types'
import styles from './BaseCardBundle.module.css'

export interface BaseCardBundleProps {
  data: OpenSeaAssetBundle
}

export const BaseCardBundle: React.FC<BaseCardBundleProps> = ({ data }) => {
  const { name, description, assets } = data
  const firstAsset = assets[0]
  const secondAsset = assets[1] || undefined
  const { imagePreviewUrl, owner } = firstAsset

  return (
    <div
      className={clsx(
        styles.BaseCardBundle,
        'flex flex-col bg-white text-left w-full h-full rounded-lg shadow-lg mb-8',
      )}
      role="listitem"
    >
      <div className="flex flex-1 p-4">
        {/* Thumbnails */}
        <div className={clsx(styles.ThumbnailsContainer, 'flex-none w-48 h-32 relative')}>
          <div
            className={clsx(
              styles.ThumbnailPrimary,
              'w-48 h-32 bg-white shadow-md overflow-hidden p-4 rounded relative z-20',
            )}
          >
            <img
              src={imagePreviewUrl}
              alt=""
              className={clsx(
                styles.ThumbnailImg,
                'absolute inset-0 w-full h-full object-cover rounded',
              )}
            />
          </div>
          <div
            className={clsx(
              styles.ThumbnailSecondary,
              'w-48 h-32 bg-white shadow-md overflow-hidden p-4 rounded absolute top-0 z-0',
            )}
          >
            <img
              src={secondAsset.imagePreviewUrl}
              alt=""
              className={clsx('absolute inset-0 w-full h-full object-cover rounded')}
            />
          </div>
        </div>
        {/* Body */}
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h3
              className={clsx(
                styles.Name,
                'mb-4 h-14 flex-auto text-lg text-indigo-600 font-semibold',
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
      <div
        className="
          flex flex-grow-0 p-4
          flex-row
          justify-between
          rounded-b-lg
          bg-gray-600
        "
      >
        <span className="text-white text-opacity-70 text-xs">
          Assets: {assets.length}
        </span>
        <span className="text-white text-opacity-70 text-xs">Owner: {owner.address}</span>
      </div>
    </div>
  )
}
