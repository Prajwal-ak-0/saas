"use client"

import React, { useState } from 'react'
import Logo from "./Logo";
import Image from 'next/image';
import { Button } from './ui/button';
import { Bell, BellRing } from 'lucide-react';
import { Separator } from './ui/separator';
import Modal from './Modal';
import TCModal from './T&CModal';
import PPModal from './PPModal';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const isSmallDevice = window.innerWidth <= 768;


  const toggleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  }

  return (
    <div className='h-[70vh] w-full '>
      <Separator className='shadow-2xl mx-4 h-[2px]' />
      <div className="flex flex-col">
        <div className="flex dark:hidden items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="px-2 my-auto"
            width={250}
            height={250}
          />
        </div>
        <div className=" dark:flex hidden  items-center justify-center">
          <Image
            src="/images/logo2.png"
            alt="logo"
            className="px-2 my-auto"
            width={250}
            height={250}
          />
        </div>

        <div className="sm:w-3/4 w-[95%] sm:h-40 h-28 bg-gradient-to-tr from-[#001f47] to-[#010a16] mx-auto rounded-lg shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-neutral-700">
          <div className="flex justify-around sm:my-16 my-10">
            <h1 className=' text-white font-mono md:text-4xl sm:text-2xl my-auto'>
              Subscribe Newsletter
            </h1>
            <div>
              {
                isSubscribed ? (
                  <Button onClick={toggleSubscribe} className='text-sm' variant={"primary"}>
                    <BellRing />
                    {isSmallDevice ? "" : "Subscribed"}
                  </Button>
                ) : (
                  <Button onClick={toggleSubscribe} className='' variant={"primary"}>
                    <Bell />
                    {isSmallDevice ? "" : "Subscribe"}
                  </Button>
                )
              }
            </div>
          </div>
        </div>

        <div className="w-full px-16 md:px-32 sm:mt-10 mt-6">
          <div className="flex max-sm:flex-col mx-auto  justify-around gap-2 items-center">
            <h1 className='dark:text-white light:text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              Home
            </h1>
            <h1 className='dark:text-white light:text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              About
            </h1>
            <h1 className='dark:text-white light:text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              Contact
            </h1>
            <h1 className='dark:text-white light:text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              Services
            </h1>
          </div>

          <div className="flex md:pl-32 md:flex-row flex-col justify-around items-center  dark:text-white light:text-black p-4 sm:mt-10 mt-6">
            <div>
              <h1 className='font-mono md:text-md sm:text-lg my-auto hover:cursor-pointer hover:shadow-neutral-300'>
                Privacy Policy
              </h1>
            </div>
            <div>
              <p className='font-mono max-md:hidden  md:text-lg font-semibold sm:text-sm my-auto'>
                &copy; {new Date().getFullYear()} AI Studio
              </p>
            </div>
            <div>
              <h1 className='font-mono md:text-md sm:text-lg my-auto hover:cursor-pointer hover:shadow-neutral-300'>
                Terms & Conditions
              </h1>
            </div>
            <div>
              <p className='md:hidden dark:text-black light:text-white font-mono mt-12 md:text-2xl sm:text-lg my-auto'>
                &copy; {new Date().getFullYear()} AI Studio
              </p>
            </div>

          </div>

        </div>
      </div>
    </div >
  )
}

export default Footer