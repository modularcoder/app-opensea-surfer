import React from 'react'
import { OpenSeaAssetBundle } from 'opensea-js/lib/types'

import { Link } from 'react-router-dom'

export interface ModalBundleItemProps {
  bundle: OpenSeaAssetBundle
}

export const ModalBundleItem: React.FC<ModalBundleItemProps> = ({ bundle }) => {
  const { name, description, assets } = bundle

  return (
    <div
      className="
       bg-black bg-opacity-70
        fixed w-full h-full top-0 left-0 z-50 overflow-y-auto p-10 md:p-32
        flex flex-col justify-start
        backdrop-filter backdrop-blur-md
      "
    >
      <div className="container mx-auto p-8 bg-white shadow-xl rounded relative z-10 text-gray-700">
        <h1 className="text-3xl mb-10">{name}</h1>

        <p className="mb-10">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" role="list">
          {assets.map((asset) => {
            return (
              <a
                href={asset.openseaLink}
                target="_blank"
                key={asset.tokenId}
                rel="noreferrer"
              >
                <div
                  className="
                  bg-white
                    rounded w-full
                    shadow
                    overflow-x-hidden
                    p-2
                    transform
                    scale-100
                    grayscale
                    hover:grayscale-0
                    hover:scale-110
                    transition-all
                  "
                >
                  <img
                    src={asset.imageUrl}
                    alt={asset.name}
                    className="object-cover h-48 w-full"
                  />
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <Link
        to={{
          pathname: `/`,
        }}
        className="cursor-default"
      >
        <div className="absolute top-0 left-0 w-full z-0 h-full"></div>
      </Link>
    </div>
  )
}

export default ModalBundleItem
