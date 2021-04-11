import React from 'react'

export const AppHeader = () => {
  return (
    <header
      className="
      mb-6 p-3 w-full
      sticky top-0
      bg-white z-50 shadow-md
    "
    >
      <div className="container mx-auto">
        <h1 className="text-xl font-semibold mb-2 text-shadow text-light-blue-300">
          OpenSea.io surfer
        </h1>
      </div>
    </header>
  )
}

export default AppHeader
