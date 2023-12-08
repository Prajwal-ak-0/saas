"use client"

import { Bot } from '@/models/Bot'
import { Brain } from '@/models/Brain'
import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const Hero = () => {
    return (
        <>
            <div className='sm:flex hidden '>
                <div className='w-[40%] mt-24 pl-16'>
                    <div>
                        <h1 className='font-bold lg:text-6xl md:text-4xl w-fit'>
                            Welcome to
                        </h1>
                        <h1 className='ml-20 lg:text-7xl md:text-5xl mt-2 text-[#D801CF] font-extrabold w-fit'>
                            AI Studio!
                        </h1>
                    </div>
                    <div className='mt-20 -ml-12 -mr-12 font-semibold'>
                        <h1 className='text-4xl leading-relaxed text-center'>
                            <span className='text-5xl text-[#D801CF]'>&quot; </span> Forge the future with AI Studio,
                            Where Intelligence meets Innovation. <span className='text-5xl text-[#D801CF]'> &quot;</span>
                        </h1>
                    </div>
                </div>
                <div className='w-[60%] '>
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
                            <Bot
                                scale={1.8}
                                animationSpeed={0.5}
                                position={[0, -1, 0]}
                            />
                        </Suspense>
                        <Preload all />
                    </Canvas>
                </div>
            </div>
            <div className='w-full h-screen pl-16' >
                <h1 className='text-5xl font-bold'>
                    Feature&apos;s Highlights :
                </h1>
                <div className='right-0 h-[500px] w-[500px] items-center justify-center'>
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
            <div className='sm:hidden mt-10 flex flex-col'>
                <div className='w-full pl-16'>
                    <div>
                        <h1 className='font-bold text-5xl w-fit'>
                            Welcome to
                        </h1>
                        <h1 className='ml-20 text-6xl text-[#D801CF] font-extrabold w-fit'>
                            AI Studio!
                        </h1>
                    </div>
                </div>
                <div className='w-full'>

                </div>
            </div>
        </>
    )
}

export default Hero