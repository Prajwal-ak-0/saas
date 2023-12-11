import React from 'react'
import ServiceCard from './ServiceCard'
import { MessageSquare, Eye, Image, FileText, FileAudio, Code } from 'lucide-react'

export const services = [
    {
        title: 'Chat Bot Service',
        description: 'Empower your applications with our advanced Chat Bot Service. Unlock the potential of natural language processing, allowing your users to interact seamlessly.Our chat bot service is the key to enhancing user engagement and satisfaction.',
        link: '/chat',
        icon: MessageSquare
    },
    {
        title: 'Image Generator Engine',
        description: 'Welcome to a world of endless possibilities with our Image Generator Service. Transform ideas into visual reality by leveraging state-of-the-art algorithms. Whether you need stunning visuals for your projects or creative content for marketing.',
        link: '/image',
        icon: Image
    },
    {
        title: 'Vision Service',
        description: 'Experience the magic of turning images into meaningful text with our GPT Vision Service. Extract valuable insights, and information from images effortlessly. From analyzing scenes to extracting text, providing a new dimension to your applications.',
        link: '/vision',
        icon: Eye
    },
    {
        title: ' Pdf Summarizer',
        description: 'Our Pdf Summarizer Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/pdf',
        icon: FileText
    },
    {
        title: 'Code Generator',
        description: 'Our Code Generator Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/code',
        icon: Code
    },
    {
        title: 'Text to Audio Generator',
        description: 'Our Text to Audio Generator Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/audio',
        icon: FileAudio
    }
]

const TopServices = () => {
    return (
        <div className=''>
            <div className=''>
                <h1 className='sm:text-4xl text-xl font-bold pl-4 '>
                    Top Service&apos;s:
                </h1>
            </div>
            <div className='grid grid-rows-1 md:grid-cols-3 gap-2 lg:mx-12 md:mx-6 my-4 sm:my-8'>
                {services.map((service, idx) => (
                    <div key={idx} className=''>
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            onClick={() => { }}
                            link={service.link}
                            icon={service.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopServices