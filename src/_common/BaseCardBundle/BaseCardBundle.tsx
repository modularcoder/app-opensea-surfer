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
  const { imagePreviewUrl, imageUrlThumbnail, owner } = firstAsset

  return (
    <div
      className={clsx(
        styles.BaseCardBundle,
        'flex flex-col bg-white text-left w-full h-full rounded-lg shadow-lg mb-8',
      )}
    >
      <div className="flex flex-1 p-4">
        <div
          className={clsx(
            styles.Thumbnail,
            'flex-none w-48 h-32 bg-white shadow-md sha overflow-hidden p-4 rounded relative',
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
            {/* <div class="text-xl font-semibold text-gray-500">$110.00</div>
            <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              In stock
            </div> */}
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
          rounded-b-lg
          bg-gradient-to-br from-blue-400 to-indigo-400
        "
      >
        <span className="text-white text-opacity-70 text-xs">Owner: {owner.address}</span>
      </div>
    </div>
  )
}
