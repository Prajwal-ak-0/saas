import React from 'react'
import Logo from '@/components/Logo'
import { services } from '@/components/TopServices'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import SidebarCard from './_components/SidebarCard'

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='max-lg:hidden  lg:fixed lg:h-screen lg:w-[300px]'>
        <div className="flex">
          <div className='flex flex-col mr-10'>
            <Logo />
            <Separator className='ml-6 mt-4 bg-neutral-400 shadow shadow-gray-400 ' />
            <SidebarCard />
          </div>
          <Separator orientation='vertical' className='ml-6 mt-4 bg-neutral-400 h-screen shadow shadow-gray-400 ' />
        </div>
      </div>

      <div className='lg:ml-[300px] w-full'>
        {children}
      </div>
    </div>
  )
}

export default page