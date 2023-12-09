import Navbar from '@/components/Navbar'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className='h-full pt-24 flex items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout