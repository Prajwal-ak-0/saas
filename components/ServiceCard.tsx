"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { MoveUpRight } from 'lucide-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface ServiceCardProps {
    title: string
    description: string
    image: string
    onClick: () => void
    link:string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    image,
    onClick,
    link
}) => {

    return (
        <>
            <div className='max-md:hidden'>
                <div className=' bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200'>
                    <div className=''>
                        <Image
                            src={image}
                            width={300}
                            height={300}
                            className='rounded-lg mx-auto'
                            alt='Service Image'
                        />
                        <div className='mt-4'>
                            <span className='font-semibold lg:text-xl md:text-md my-2'>
                                {title}<br />
                            </span>
                            <h1 className='lg:text-md md:text-sm text-justify'>
                                {description}
                            </h1>
                        </div>
                        <div>
                            <Button variant={"secondary"} className='flex mt-2'>
                                Try Now
                                <MoveUpRight className='ml-2' size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden max-sm:hidden bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200'>
                <div className='flex flex-row gap-4'>
                    <Image
                        src={image}
                        width={300}
                        height={300}
                        className='rounded-lg mx-auto'
                        alt='Service Image'
                    />
                    <div className='mt-4'>
                        <span className='font-semibold text-xl my-2'>
                            {title}<br />
                        </span>
                        <h1 className='text-md text-justify'>
                            {description}
                        </h1>
                        <div>
                            <Link href={`${link}`}>
                            <Button  variant={"secondary"} className='flex mt-2'>
                                Try Now
                                <MoveUpRight className='ml-2' size={16} />
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:hidden bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-4 rounded-lg bg-neutral-200'>
                <div className='flex flex-row gap-4'>
                    <Image
                        src={image}
                        width={100}
                        height={100}
                        className='rounded-lg cursor-pointer mx-auto my-auto'
                        alt='Service Image'
                    />
                    <div className=''>
                        <span className='font-semibold text-sm my-2'>
                            {title}<br />
                        </span>
                        <h1 className='text-xs text-justify'>
                            {description}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard