import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import {Message} from '@/models/Message'

const MessageModel = () => {
    return (
        <div>
            <div className='' >
                <div className=' items-center justify-center'>
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
                            <Message
                                scale={2}
                                animationSpeed={0.5}
                                position={[0, 0, 0]}
                            />
                        </Suspense>
                        <Preload all />
                    </Canvas>
                    <h1 className=' text-center font-semibold text-2xl text-neutral-600 '>
                        Start your Conversation!
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default MessageModel