import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
    {
        title: 'Conversational Intelligence Hub',
        description: 'Empower your applications with our advanced Chat Bot Service. Unlock the potential of natural language processing, allowing your users to interact seamlessly. From answering queries to providing personalized recommendations, our chat bot service is the key to enhancing user engagement and satisfaction.',
        image: '/images/chat.jpeg'
    },
    {
        title: 'Imaginative Creations Studio',
        description: 'Welcome to a world of endless possibilities with our Image Generator Service. Transform ideas into visual reality by leveraging state-of-the-art algorithms. Whether you need stunning visuals for your projects or creative content for marketing, our Image Generator Service is your gateway to a visually compelling future.',
        image: '/images/img.jpeg'
    },
    {
        title: 'Visionary Text from Images Engine',
        description: 'Experience the magic of turning images into meaningful text with our Chat GPT Vision Service. Extract valuable insights, details, and information from images effortlessly. From analyzing scenes to extracting text, our service bridges the gap between visual content and actionable intelligence, providing a new dimension to your applications.',
        image: '/images/img2.jpeg'
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
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopServices