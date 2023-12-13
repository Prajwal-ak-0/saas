import React from 'react'
import Logo from "./Logo";
import Image from 'next/image';
import { Button } from './ui/button';
import { Bell, BellRing } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const toggleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  }

  return (
    <div className='h-[75vh] w-full '>
      <Separator className='shadow-2xl mx-4 h-[2px]' />
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="px-2 my-auto"
            width={250}
            height={250}
          />
        </div>
        <div className="w-3/4 mt-2 h-40 bg-gradient-to-tr from-[#001f47] to-[#010a16] mx-auto rounded-lg shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-neutral-700">
          <div className="flex justify-around my-16">
            <h1 className='text-white font-mono md:text-4xl sm:text-2xl my-auto'>
              Subscribe Newsletter
            </h1>
            <div>
              {
                isSubscribed ? (
                  <Button onClick={toggleSubscribe} className='text-sm' variant={"primary"}>
                    <BellRing  />
                    Subscribed
                  </Button>
                ) : (
                  <Button onClick={toggleSubscribe} className='' variant={"primary"}>
                    <Bell />
                    Subscribe
                  </Button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer