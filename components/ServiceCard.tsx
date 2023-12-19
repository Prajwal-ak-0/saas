"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { MoveUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
    title: string
    description: string
    onClick: () => void
    link: string
    icon?: React.ElementType
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    onClick,
    link,
    icon: Icon
}) => {
    const router = useRouter();
    return (
        <>
            <div className='max-md:hidden'>
                <div className=' bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
                    <div className=''>
                        <div className="flex gap-2">
                            <div className={cn("py-2 w-fit rounded-md")}>
                                {Icon && <Icon className={cn("w-10 h-10 font-extrabold")} />}

                            </div>
                            <span className='font-semibold my-auto lg:text-xl md:text-md'>
                                {title}<br />
                            </span>
                            <div className='ml-auto'>
                                <Link href={`${link}`}>
                                    <Button size={"iconSm"} variant={"secondary"} className='flex mt-2'>
                                        <MoveUpRight size={20} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1 className='lg:text-md md:text-sm text-justify'>
                                {description}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden mx-12 max-sm:hidden bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 px-6 py-2 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
                <div className='flex flex-row gap-4'>
                    <div className='mt-4'>
                        <div className="flex gap-2">
                            <div className={cn("py-2 w-fit rounded-md")}>
                                {Icon && <Icon className={cn("w-10 h-10 font-extrabold")} />}

                            </div>
                            <span className='font-semibold my-auto lg:text-xl md:text-md'>
                                {title}<br />
                            </span>
                            <div className='ml-auto'>
                                <Link href={`${link}`}>
                                    <Button size={"iconSm"} variant={"secondary"} className='flex mt-2'>
                                        <MoveUpRight size={20} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <h1 className='text-md text-justify'>
                            {description}
                        </h1>
                    </div>
                </div>
            </div>

            <div className='sm:hidden bg-opacity-50 mx-2 backdrop-filter backdrop-blur-md border border-gray-300 px-4 py-2 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
                <div className='flex flex-row gap-4'>
                    <div className=''>
                        <div className="flex gap-2">
                            <div className={cn("py-2 w-fit rounded-md")}>
                                {Icon && <Icon className={cn("w-5 h-5 font-extrabold")} />}

                            </div>
                            <span className='font-semibold mt-1 lg:text-xl md:text-md'>
                                {title}<br />
                            </span>
                            <div className='ml-auto'>
                                <Link href={`${link}`}>
                                    <Button size={"iconXSm"} variant={"secondary"} className='flex mt-2'>
                                        <MoveUpRight size={14} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
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