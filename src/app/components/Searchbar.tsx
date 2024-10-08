import { useEffect, useState } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'

function Searchbar() {
    const barContent = [
        { 'text': 'Click to add Josh on Linkedin!', 'url': 'https://www.linkedin.com/in/jshkm10/' },
        { 'text': 'Did you know Josh is also a photographer? Click here to see his work.', 'url': 'https://www.jshkmphoto.com' },
        { 'text': "Click here to see Josh's project in GitHub!", 'url': 'https://github.com/jshkm' },
        { 'text': "Check out Josh on Instagram!", 'url': 'https://www.instagram.com/joshkim10/' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % barContent.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [barContent.length]);

    return (
        <Link href={barContent[currentIndex].url} className='h-16 max-w-[872px] w-full px-6'>
            <motion.button
                className='flex items-center justify-start bg-[#1E1F20] h-full w-full rounded-full p-6'
                whileHover={{ filter: "brightness(1.1)" }}
            >
                <AnimatePresence mode='wait'>
                    <motion.p
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-[#B1B2B2] text-nowrap truncate ...'
                    >
                        {barContent[currentIndex].text}<span className="blinking-cursor translate-y-[3px]"></span>
                    </motion.p>
                </AnimatePresence>
            </motion.button>
        </Link >
    )
}

export default Searchbar