"use client";

import { Brain } from '@/models/Brain';
import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'

const Features = () => {
  return (
    <>
    {/* LARGE DEVEICES */}
      <div className='max-lg:hidden mt-16'>
        <h1 className='text-5xl font-bold pl-16 '>
          Feature&apos;s Highlights :
        </h1>
        <div className='w-1/3 items-center mx-auto mt-8 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200'>
          <h1>
            <span className='font-semibold'>
              1. AI at Your Fingertips :<br />
            </span>
            From text and image processing to code generation, access a suite of AI services effortlessly.
          </h1>
        </div>

        <div className='flex w-full px-8'>
          <div className='w-[30%] my-auto items-center mx-auto mt-8 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200'>
            <h1>
              <span className='font-semibold'>
                2. Innovate with Confidence:<br />
              </span>
              AI Studio ensures secure and ethical AI solutions for your projects.
            </h1>
          </div>
          <div className='w-[40%]' >
            <div className='h-[500px] items-center justify-center'>
              <Canvas >
                <Suspense >
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                  />
                  <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2 - 0.1}
                    minPolarAngle={Math.PI / 2 - 0.1}
                  />
                  <Brain
                    scale={1.2}
                    animationSpeed={0.5}
                    position={[0, -2.5, 0]}
                  />
                </Suspense>
                <Preload all />
              </Canvas>
            </div>
          </div>
          <div className='my-auto w-[30%] items-center mx-auto mt-8 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200'>
            <h1>
              <span className='font-semibold'>
                3.  Stay Ahead, Stay Informed:<br />
              </span>
              Get the latest in AI trends, news, and breakthroughs directly from AI Studio.
            </h1>
          </div>
        </div>
      </div>
    {/* MEDIUM DEVICES */}
      <div className='lg:hidden '>
        <h1 className='sm:text-4xl text-xl ml-4  font-bold pl-4 mt-8'>
          Feature&apos;s Highlights :
        </h1>

        <div className='h-[260px] sm:h-[350px]'>
          <Canvas >
            <Suspense >
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
              />
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2 - 0.1}
                minPolarAngle={Math.PI / 2 - 0.1}
              />
              <Brain
                scale={1.3}
                animationSpeed={0.5}
                position={[0, -2.8, 0]}
              />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>

        <div className='sm:h-[420px] h-[380px]'>
          <div className='w-[330px] sm:w-[530px] items-center mx-auto  bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-4 rounded-sm bg-neutral-200'>
            <h1 className='text-[14px] sm:text-[18px]'>
              <span className='font-semibold text-[16px] sm:text-[20px]'>
                1. AI at Your Fingertips :<br />
              </span>
              From text and image processing to code generation, access a suite of AI services effortlessly.
            </h1>
          </div>

          <div className='w-[330px] sm:w-[530px] items-center mx-auto mt-4 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-4 rounded-sm bg-neutral-200'>
            <h1 className='text-[14px] sm:text-[18px]'>
              <span className='font-semibold text-[16px] sm:text-[20px]'>
                2. Innovate with Confidence:<br />
              </span>
              AI Studio ensures secure and ethical AI solutions for your projects.
            </h1>
          </div>

          <div className='w-[330px] sm:w-[530px] items-center mx-auto mt-4 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-4 rounded-sm bg-neutral-200'>
            <h1 className='text-[14px] sm:text-[18px]'>
              <span className='font-semibold text-[16px] sm:text-[20px]'>
                3.  Stay Ahead, Stay Informed:<br />
              </span>
              Get the latest in AI trends, news, and breakthroughs directly from AI Studio.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features