import { useEffect, useState } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import Back from '../components/Back';

interface PageType {
    text: string;
    icon: string;
    page: string;
}

interface ContentBoxProps {
    pages: PageType[]
}

function AboutContentBox({ pages }: ContentBoxProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .75
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
                className='flex flex-col items-center justify-between w-full h-5/6 space-y-6 overflow-y-auto p-2'
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    className='flex w-full h-20 justify-start items-center space-x-2 text-3xl text-wrap'
                    variants={item}
                >
                    <img className='min-h-9 h-9 rounded-full' src={'/images/me.jpg'} alt={'icon'}></img>
                    <h1 className='font-medium text-[#fffffff1]'>Who is Josh Kim?</h1>
                </motion.div>
                <motion.div
                    className='w-full h-3/4'
                    variants={item}
                >
                <motion.button className='w-full h-full bg-[#1E1F20] rounded-xl p-2' whileHover={{ filter: "brightness(1.1)" }}>
                </motion.button>
                </motion.div>
                <motion.div
                    className='flex w-full items-start'
                    variants={item}
                >
                </motion.div>
                <Back></Back>
            </motion.div>
            <Searchbar></Searchbar>
        </div>
    )
}

export default AboutContentBox