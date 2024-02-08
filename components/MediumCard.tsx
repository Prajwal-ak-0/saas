import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    heading: string;
    content: string;
}

const MediumCard: React.FC<FeatureCardProps> = ({
    heading,
    content
}) => {
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }} 
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='items-center mx-auto mt-4 bg-opacity-50 backdrop-filter backdrop-blur-md p-4 rounded-xl bg-neutral-200 dark:bg-[#080a35]'
        >
            <div className='items-center mx-auto  bg-opacity-50 backdrop-filter backdrop-blur-md p-4 rounded-xl bg-neutral-200 dark:bg-[#080a35]'>
                <h1 className='text-[14px] sm:text-[18px]'>
                    <span className='font-semibold text-[16px] sm:text-[20px]'>
                        {heading}<br />
                    </span>
                    {content}
                </h1>
            </div>
        </motion.div>
    );
};

export default MediumCard;
