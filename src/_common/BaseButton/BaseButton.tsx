import React from 'react'

export interface BaseButtonProps {
  variant: 'button' | 'a' | 'link'
}

export const BaseButton: React.FC<BaseButtonProps> = ({ children }) => {
  return <button>{children}</button>
}

export default BaseButton
