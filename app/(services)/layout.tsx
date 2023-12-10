import Navbar from '@/components/Navbar'
import React from 'react'

const page = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div >
          {children}
        </div>
    </div>
  )
}

export default page