import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='auth-layout'>
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout
