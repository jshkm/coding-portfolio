import React from 'react';
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Header from './components/Header';
import Searchbar from './components/Searchbar';

interface PageType {
    text: string;
    icon: string;
    page: string;
}

interface ContentBoxProps {
    pages: PageType[]
}
const Card = ({ page }: { page: PageType }) => {
    const router = useRouter();

    return (
        <motion.button
            style={{ filter: "brightness(1)" }}
            whileHover={{ filter: "brightness(1.35)" }}
            onClick={() => router.push(page.page)}
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

function HomeContentBox({ pages }: ContentBoxProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .65
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <div className='flex flex-col justify-between items-center h-full w-full px-10 py-6'>
            <Header></Header>
            <motion.div
                className='flex flex-col items-center w-full space-y-20'
                variants={container}
                initial="hidden"
                animate="show"
            >
                <div className='text-5xl space-y-7 text-wrap'>
                    <motion.h1
                        className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-red-500'
                        variants={item}
                    >
                        Hello, welcome to Josh Kim's Portfolio
                    </motion.h1>

                    <motion.h1
                        className='text-[#444746] font-semibold'
                        variants={item}
                    >
                        How can I help you today?
                    </motion.h1>

                </div>
                <motion.div
                    className='flex w-full items-center justify-center overflow-x-auto space-x-2 py-2'
                    variants={item}
                //figure out weird scroll behavior
                >
                    {pages.map((page, i) => (
                        <Card key={i} page={page}></Card>
                    ))}
                </motion.div>
            </motion.div>
            <Searchbar></Searchbar>
        </div>
    )
}

export default HomeContentBox