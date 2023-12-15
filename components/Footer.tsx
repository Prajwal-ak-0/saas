"use client"

import React, { useState } from 'react'
import Logo from "./Logo";
import Image from 'next/image';
import { Button } from './ui/button';
import { Bell, BellRing } from 'lucide-react';
import { Separator } from './ui/separator';
import Modal from './FooterModal';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [isTermsAndConditionsOpen, setTermsAndConditionsOpen] = useState(false);

  const toggleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  }

  const handlePrivacyPolicyClick = () => {
    setPrivacyPolicyOpen(true);
  };

  const handleTermsAndConditionsClick = () => {
    setTermsAndConditionsOpen(true);
  };

  const handlePrivacyPolicyClose = () => {
    setPrivacyPolicyOpen(false);
  };

  const handleTermsAndConditionsClose = () => {
    setTermsAndConditionsOpen(false);
  };

  const privacyPolicyContent = `
  <div class="mb-4">
    <h3 class="text-xl font-semibold mb-2">Introduction</h3>
    <p class="text-gray-700">
    Welcome to [Your Project Name]! This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from [Your Website/Service/App Name] (the "Site").
    </p>
  </div>

  <div class="mb-4">
    <h3 class="text-xl font-semibold mb-2">Personal Information We Collect:
    </h3>
    <p class="text-gray-700">
    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
    </p>
  </div>

  <div class="mb-4">
    <h3 class="text-xl font-semibold mb-2">How Do Sharing Your Personal Information:
    </h3>
    <p class="text-gray-700">
    We share your personal information with third parties to help us use your personal information, as described above. For example, we use [Third Party Service] to power our online store.
    </p>
  </div>
`;


  const termsAndConditionsContent = `
    Insert your terms and conditions content here.
    Include information about user responsibilities, usage policies, etc.
  `;

  return (
    <div className='h-[70vh] w-full '>
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

        <div className="w-3/4 sm:h-40 h-28 bg-gradient-to-tr from-[#001f47] to-[#010a16] mx-auto rounded-lg shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-neutral-700">
          <div className="flex justify-around sm:my-16 my-10">
            <h1 className='text-white font-mono md:text-4xl sm:text-2xl my-auto'>
              Subscribe Newsletter
            </h1>
            <div>
              {
                isSubscribed ? (
                  <Button onClick={toggleSubscribe} className='text-sm' variant={"primary"}>
                    <BellRing />
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

        <div className="w-full px-16 md:px-32 sm:mt-10 mt-6">
          <div className="flex max-sm:flex-col mx-auto  justify-around gap-2 items-center">
            <h1 className='text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              Home
            </h1>
            <h1 className='text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              About
            </h1>
            <h1 className='text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              Contact
            </h1>
            <h1 className='text-black md:text-2xl sm:text-lg my-auto font-medium text-lg hover:cursor-pointer hover:shadow-neutral-300' >
              Services
            </h1>
          </div>

          <div className="flex md:pl-32 md:flex-row flex-col justify-around items-center  text-black p-4 sm:mt-10 mt-6">
            <div>
              <h1 onClick={handlePrivacyPolicyClick} className='font-mono md:text-md sm:text-lg my-auto hover:cursor-pointer hover:shadow-neutral-300'>
                Privacy Policy
              </h1>
            </div>
            <div>
              <p className='font-mono max-md:hidden  md:text-lg font-semibold sm:text-sm my-auto'>
                &copy; {new Date().getFullYear()} AI Studio
              </p>
            </div>
            <div>
              <h1 onClick={handleTermsAndConditionsClick} className='font-mono md:text-md sm:text-lg my-auto hover:cursor-pointer hover:shadow-neutral-300'>
                Terms & Conditions
              </h1>
            </div>
            <div>
              <p className='md:hidden font-mono mt-12 md:text-2xl sm:text-lg my-auto'>
                &copy; {new Date().getFullYear()} AI Studio
              </p>
            </div>
            <Modal
              isOpen={isPrivacyPolicyOpen}
              onRequestClose={handlePrivacyPolicyClose}
              title="Privacy Policy"
              content={privacyPolicyContent}
            />

            {/* Terms and Conditions Modal */}
            <Modal
              isOpen={isTermsAndConditionsOpen}
              onRequestClose={handleTermsAndConditionsClose}
              title="Terms and Conditions"
              content={termsAndConditionsContent}
            />
          </div>

        </div>
      </div>
    </div >
  )
}

export default Footer