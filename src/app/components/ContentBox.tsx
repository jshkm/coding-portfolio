import { useEffect, useState } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'

interface PageType {
    text: string;
    icon: string;
}

interface ContentBoxProps {
    pages: PageType[]
}
const Card = ({ page }: { page: PageType }) => {
    return (
        <motion.button
            style={{ filter: "brightness(1)" }}
            whileHover={{ filter: "brightness(1.35)" }}
        >
            <div className='flex flex-col items-start justify-between h-[200px] w-[200px] bg-[#1E1F20] rounded-xl p-4'>
                <p className='text-left'>{page.text}</p>
                <div className='flex w-full justify-end'>
                    <div className='flex items-center justify-center h-10 w-10 bg-[#131314] rounded-full'>
                        <img className='min-h-7' src={page.icon} alt={'icon'}></img>
                    </div>
                </div>
            </div>
        </motion.button>
    )
}

const SearchBar = () => {
    const barContent = [
        { 'text': 'Click to add Josh on Linkedin!', 'url': 'https://www.linkedin.com/in/jshkm10/' },
        { 'text': 'Did you know Josh is also a photographer? Click here to see his work.', 'url': 'https://www.jshkmphoto.com' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % barContent.length);
        }, 4000); // Change item every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [barContent.length]);

    return (
        <Link href={barContent[currentIndex].url} className='h-16 max-w-[824px] w-full'>
            <button
                className='flex items-center justify-start bg-[#1E1F20] h-full w-full rounded-full p-6'>
                <AnimatePresence mode='wait'>
                    <motion.p
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-[#B1B2B2]'
                    >
                        {barContent[currentIndex].text}<span className="blinking-cursor translate-y-[3px]"></span>
                    </motion.p>
                </AnimatePresence>
            </button>
        </Link >
    )
}

const Header = () => {
    return (
        <div className='flex justify-end items-center h-full w-full space-x-6'>
            <motion.button
                className='flex justify-center items-center h-11 w-11 rounded-full bg-[#131314]'
                style={{ filter: "brightness(1)" }}
                whileHover={{ filter: "brightness(1.55)" }}
            >
                <img className='h-7' src={'/icons/grid-icon.svg'} alt={'grid icon'}></img>
            </motion.button>
            <button>
                <img className='rounded-full max-h-9' src={'/images/me.jpg'} alt={'profile pic'}></img>
            </button>
        </div>
    )
}


function ContentBox({ pages }: ContentBoxProps) {
    return (
        <div className='flex flex-col justify-between items-center h-full w-full px-10 py-6'>
            <div className='flex w-full h-10'>
                <Header></Header>
            </div>
            <div className='flex flex-col items-center w-full space-y-20'>
                <div className='text-5xl space-y-7 text-wrap'>
                    <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-red-500'>Hello, welcome to Josh Kim's Portfolio</h1>
                    <h1 className='text-[#444746] font-semibold'>How can I help you today?</h1>
                </div>
                <div className='flex w-full items-center justify-center overflow-x-auto space-x-2 py-2'
                //figure out weird scroll behavior
                >
                    {pages.map((page, i) => (
                        <Card key={i} page={page}></Card>
                    ))}
                </div>
            </div>
            <SearchBar></SearchBar>
        </div>
    )
}

export default ContentBox