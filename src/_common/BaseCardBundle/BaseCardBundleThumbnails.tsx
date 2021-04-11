import clsx from 'clsx'
import React from 'react'
import styles from './BaseCardBundle.module.css'
import { OpenSeaAsset } from 'opensea-js/lib/types'

import BaseCardBundleMedia from './BaseCardBundleMedia'

export interface BaseCardBundleThumbnailsProps {
  assets: OpenSeaAsset[]
}

export const BaseCardBundleThumbnails: React.FC<BaseCardBundleThumbnailsProps> = ({
  assets,
}) => {
  const firstAsset = assets[0]
  const secondAsset = assets[1] || undefined
  const numAssetsMore = Math.max(assets.length - 1, 0)

  return (
    <div
      className={clsx(styles.ThumbnailsContainer, 'flex-none lg:w-40 xl:w-48 relative')}
    >
      <div
        className={clsx(
          styles.ThumbnailPrimary,
          `
        h-40 md:h-32 lg:w-40 xl:w-48
        bg-white shadow-md overflow-hidden rounded relative z-20
      `,
        )}
      >
        <BaseCardBundleMedia src={firstAsset.imageUrl} className={styles.ThumbnailImg} />
      </div>
      <div
        className={clsx(
          styles.ThumbnailSecondary,
          `
        lg:w-40 xl:w-48 h-32
        bg-white shadow-md overflow-hidden rounded absolute top-0 z-0`,
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
        <BaseCardBundleMedia src={secondAsset.imageUrl} className={styles.ThumbnailImg} />
      </div>
    </div>
  )
}

export default BaseCardBundleThumbnails
