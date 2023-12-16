"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/components/TopServices'
import React from 'react'

const page = () => {

  return (
    <>
      <div className='flex flex-col'>
        <div>
          <Navbar isExplore />
        </div>
        <div className='sm:mt-36 mt-20'>
          <h1 className='sm:ml-8 ml-4 text-2xl md:text-6xl sm:text-5xl font-semibold'>
            Our Service&apos;s
          </h1>
          <div className='grid grid-rows-1 md:grid-cols-3 gap-4 lg:mx-12 md:mx-6 my-4 sm:my-8'>
            {services.map((service, idx) => (
              <div key={idx} className=''>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  onClick={() => { }}
                  link={service.link}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page