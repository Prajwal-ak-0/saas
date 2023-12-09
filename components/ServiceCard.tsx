import Image from 'next/image'
import React from 'react'

interface ServiceCardProps {
    title: string
    description: string
    image: string
    onClick: () => void
}

const ServiceCard:React.FC<ServiceCardProps> = ({
    title,
    description,
    image,
    onClick
}) => {
  return (
    <div>
        <div className='w-[100%] my-auto items-center mx-auto mt-8 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200'>
            <Image
                src={image}
                width={300}
                height={300}
                className='rounded-lg'
                alt='Service Image'
            />
            <h1>
            <span className='font-semibold'>
                {title}<br />
            </span>
            {description}
            </h1>
        </div>
    </div>
  )
}

export default ServiceCard