import clsx from 'clsx'
import React from 'react'

export interface BaseCardBundleMediaProps {
  className?: string
  src: string
}

export const BaseCardBundleMedia: React.FC<BaseCardBundleMediaProps> = ({
  className,
  src,
}) => {
  const isVideo = src && src.endsWith('.mp4')
  const classNames = clsx(
    className,
    'absolute inset-0 w-full h-full object-cover rounded',
  )

  return (
    <>
      {isVideo && (
        <video controls className={classNames}>
          <source src={src} type="video/mp4"></source>
        </video>
      )}
      {!isVideo && <img src={src} alt="" className={classNames} />}
    </>
  )
}

export default BaseCardBundleMedia
