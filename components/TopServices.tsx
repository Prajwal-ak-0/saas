import React from 'react'
import ServiceCard from './ServiceCard'
import { MessageSquare, Eye, Image, FileText, FileAudio, Code, Video, Music, LanguagesIcon } from 'lucide-react'
import { title } from 'process'
import { link } from 'fs'

export const services = [
    {
        title: 'Chat Bot Service',
        description: 'Empower your applications with our advanced Chat Bot Service. Unlock the potential of natural language processing, allowing your users to interact seamlessly.Our chat bot service is the key to enhancing user engagement and satisfaction.',
        link: '/chat',
        icon: MessageSquare
    },
    {
        title: 'Image Generator',
        description: 'Welcome to a world of endless possibilities with our Image Generator Service. Transform ideas into visual reality by leveraging state-of-the-art algorithms. Whether you need stunning visuals for your projects or creative content for marketing.',
        link: '/image',
        icon: Image
    },
    {
        title: 'Language Translator',
        description: 'Our Language Translator Service is the key to unlocking the power of natural language processing. Extract the most important information from your document, and save time. From translating document to extracting keywords, our service does all.',
        link: '/language',
        icon: LanguagesIcon
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
        title: 'Text ➡️ Audio',
        description: 'Our Text to Audio Generator Service is the key to unlocking the power of natural language processing. Extract the most important information from your document, and save time. From summarizing document to extracting keywords, our service does  all.',
        link: '/texttoaudio',
        icon: FileAudio
    },
    {
        title: 'Audio ➡️ Text',
        description: 'Our Audio to Text Generator Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/audiotoaudio',
        icon: FileText
    },
    {
        title: 'Video Generator',
        description: 'Our Video Generator Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/video',
        icon: Video
    },
    {
        title: 'Music Generator',
        description: 'Our Music Generator Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/music',
        icon: Music
    },
    {
        title: '3D Costume Design',
        description: 'Our 3D Costume Designer Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/3d',
        icon: Image
    },
    {
        title: 'Email Writer',
        description: 'Our Email Writer Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/email',
        icon: MessageSquare
    },
    {
        title: 'Resume Writer',
        description: 'Our Resume Writer Service is the key to unlocking the power of natural language processing. Extract the most important information from your documents, and save time. From summarizing documents to extracting keywords, our service does it all.',
        link: '/resume',
        icon: FileText
    }
]

export const topservices = [
    {
        title: 'Chat Bot',
        description: 'Empower your applications with our advanced Chat Bot Service. Unlock the potential of natural language processing, allowing your users to interact seamlessly.Our chat bot service is the key to enhancing user engagement and satisfaction.',
        link: '/chat',
        icon: MessageSquare
    },
    {
        title: 'Image Generator',
        description: 'Welcome to a world of endless possibilities with our Image Generator Service. Transform ideas into visual reality by leveraging state-of-the-art algorithms. Whether you need stunning visuals for your projects or creative content for marketing.',
        link: '/image',
        icon: Image
    },
    {
        title: 'Language Translator',
        description: 'Our Language Translator Service is the key to unlocking the power of natural language processing. Extract the most important information from your document, and save time. From translating document to extracting keywords, our service does all.',
        link: '/language',
        icon: LanguagesIcon
    },
    {
        title: 'Pdf Summarizer',
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
        title: 'Text ➡️ Audio',
        description: 'Our Text to Audio Generator Service is the key to unlocking the power of natural language processing. Extract the most important information from your document, and save time. From summarizing document to extracting keywords, our service does all.',
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
                {topservices.map((service, idx) => (
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