"use client";

import Image from 'next/image';
import Card from './MediumCard';
import LargeCard from './LargeCard';

const Features = () => {
  return (
    <>
      {/* LARGE DEVEICES */}
      <div className='max-lg:hidden mt-16'>
      <h1 className='text-5xl font-bold pl-16 '>Feature&apos;s Highlights :</h1>
      <div className='w-1/3 items-center mx-auto mt-8 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200 dark:bg-[#080a35]'>
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
        <div className='w-[40%]'>
          <div className='h-[500px] items-center justify-center'>
            <Image src={'/images/b2.png'} alt='brain' width={500} height={500} />
          </div>
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
        <h1 className='sm:text-4xl text-2xl ml-4  font-bold pl-2 mt-8'>
          Feature&apos;s Highlights :
        </h1>

        <div className='h-fit flex py-2 items-center justify-center'>
          <Image
            src={'/images/b2.png'}
            alt='brain'
            width={200}
            height={200}
          />
        </div>

        <div className='pl-4 flex flex-col items-center justify-center'>
          
          <Card heading='1. AI at Your Fingertips :' content='From text and image processing to code generation, access a suite of AI services effortlessly.' />

          <Card heading='2. Innovate with Confidence:' content='AI Studio ensures secure and ethical AI solutions for your projects.' />

          <Card heading='3.  Stay Ahead, Stay Informed:' content='Get the latest in AI trends, news, and breakthroughs directly from AI Studio.' />
        </div>
      </div>
    </>
  )
}

export default Features