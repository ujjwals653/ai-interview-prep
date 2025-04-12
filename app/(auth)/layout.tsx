import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>AuthLayout</div>
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout
