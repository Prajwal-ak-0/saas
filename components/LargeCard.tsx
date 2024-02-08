import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

const LargeCard = ({ index, children }: { index: number; children: ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const top = cardRef.current.offsetTop;
        const height = cardRef.current.clientHeight;
        const isVisible = window.scrollY > top - window.innerHeight + height * 0.5;
        setIsVisible(isVisible);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // No dependencies, runs only once

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animation when card is in viewport
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation duration and easing
      className='w-[30%] my-auto items-center mx-auto mt-8 bg-opacity-50 backdrop-filter backdrop-blur-md border border-gray-300 p-6 rounded-lg bg-neutral-200 dark:bg-[#080a35]'
    >
      {children}
    </motion.div>
  );
};

export default LargeCard;
