import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const top = cardRef.current.offsetTop;
                const height = cardRef.current.clientHeight;
                const isVisible = window.scrollY > top - window.innerHeight + height * 0.5;
                setIsVisible(isVisible);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // No dependencies, runs only once

    return (
        <><motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animation when card is in viewport
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation duration and easing
            className='items-center mx-auto mt-4 bg-opacity-50 backdrop-filter backdrop-blur-md border p-4 rounded-xl bg-neutral-200 dark:bg-[#080a35]'
        >
            <div className='max-md:hidden'>
                <div className=' bg-opacity-50 backdrop-filter backdrop-blur-md  p-6 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
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

            <div className='md:hidden mx-12 max-sm:hidden bg-opacity-50 backdrop-filter backdrop-blur-md  px-6 py-2 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
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

            <div className='sm:hidden bg-opacity-50   backdrop-blur-md mx-6 py-2 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
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
        </motion.div>
        </>
    )
}

export default ServiceCard
