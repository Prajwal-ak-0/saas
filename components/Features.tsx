"use client";

import Image from 'next/image';
import Card from './MediumCard';
import LargeCard from './LargeCard';
import { Tilt } from 'react-tilt';

const Features = () => {
  return (
    <>
      {/* LARGE DEVEICES */}
      <div className='max-lg:hidden mt-16'>
        <h1 className='text-5xl font-bold pl-16 '>Feature&apos;s Highlights :</h1>
        <div className='w-1/3 items-center mx-auto mt-8 bg-opacity-50  backdrop-blur-md border  p-6 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
          <h1>
            <span className='font-semibold'>1. AI at Your Fingertips :<br /></span>
            From text and image processing to code generation, access a suite of AI services effortlessly.
          </h1>
        </div>

        <div className='flex w-full px-8'>
          <LargeCard index={2}>
            <h1>
              <span className='font-semibold'>2. Innovate with Confidence:<br /></span>
              AI Studio ensures secure and ethical AI solutions for your projects.
            </h1>
          </LargeCard>
          <div className='w-[40%] hover:cursor-pointer'>
            <Tilt className="Tilt" options={{ max: 5 }}>
              <div className='h-[500px] items-center justify-center'>
                <Image src={'/images/b2.png'} alt='brain' width={500} height={500} />
              </div>
            </Tilt>
          </div>
          <LargeCard index={3}>
            <h1>
              <span className='font-semibold'>3. Stay Ahead, Stay Informed:<br /></span>
              Get the latest in AI trends, news, and breakthroughs directly from AI Studio.
            </h1>
          </LargeCard>
        </div>
      </div>

      {/* MEDIUM DEVICES */}
      <div className='lg:hidden '>
        <h1 className='sm:text-4xl text-2xl pl-4 font-bold  mt-8'>
          Feature&apos;s Highlights :
        </h1>

        <Tilt className="Tilt hover:cursor-pointer" options={{ max: 5 }}>
          <div className='h-fit flex py-2 items-center justify-center'>
            <Image
              src={'/images/b2.png'}
              alt='brain'
              width={300}
              height={300}
            />
          </div>
        </Tilt>
        <div className='px-8  flex flex-col items-center justify-center'>

          <Card heading='1. AI at Your Fingertips :' content='From text and image processing to code generation, access a suite of AI services effortlessly.' />

          <Card heading='2. Innovate with Confidence:' content='AI Studio ensures secure and ethical AI solutions for your projects.' />

          <Card heading='3.  Stay Ahead, Stay Informed:' content='Get the latest in AI trends, news, and breakthroughs directly from AI Studio.' />
        </div>
      </div>
    </>
  )
}

export default Features