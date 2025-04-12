import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>RootLayout</p>
      <div>{children}</div>
    </div>
  )
}

export default RootLayout
