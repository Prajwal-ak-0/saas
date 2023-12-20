"use client";

import { topservices } from '@/components/TopServices';
import { useRouter } from 'next/navigation';
import React from 'react'

const SidebarCard = () => {
    const router = useRouter();
  return (
    <div>
        <div className='mx-auto flex mt-8 gap-2 flex-col my-1'>
              {
                topservices.map((service, idx) => (
                  <div onClick={() => router.push(service.link)  } key={idx} className='flex bg-neutral-10 p-2 border  hover:shadow-lg hover:scale-105 border-neutral-300 ml-6 rounded-md w-full cursor-pointer flex-row gap-2 my-2'>
                    <service.icon size={34} />
                    <h1 className='text-md my-auto  font-regular'>{service.title}</h1>
                  </div>
                ))
              }
          </div>
    </div>
  )
}

export default SidebarCard