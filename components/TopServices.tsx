import React from 'react'
import ServiceCard from './ServiceCard'
import { link } from 'fs'

const services = [
    {
        title: 'Conversational Intelligence Hub',
        description: 'Empower your applications with our advanced Chat Bot Service. Unlock the potential of natural language processing, allowing your users to interact seamlessly.Our chat bot service is the key to enhancing user engagement and satisfaction.',
        image: '/images/chat.jpeg',
        link: '/chat'
    },
    {
        title: 'Imaginative Creations Studio',
        description: 'Welcome to a world of endless possibilities with our Image Generator Service. Transform ideas into visual reality by leveraging state-of-the-art algorithms. Whether you need stunning visuals for your projects or creative content for marketing.',
        image: '/images/img.jpeg',
        link: '/image'
    },
    {
        title: 'Visionary Text from Images Engine',
        description: 'Experience the magic of turning images into meaningful text with our GPT Vision Service. Extract valuable insights, and information from images effortlessly. From analyzing scenes to extracting text, providing a new dimension to your applications.',
        image: '/images/img2.jpeg',
        link: '/vision'
    },
]

const TopServices = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-5xl font-bold pl-8 '>
                    Top Service&apos;s:
                </h1>
            </div>
            <div className='grid grid-rows-1 md:grid-cols-3 gap-2 lg:mx-12 md:mx-6  my-8'>
                {services.map((service, idx) => (
                    <div key={idx} className=''>
                        <ServiceCard
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        onClick={() => { }}
                        link={service.link}
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopServices