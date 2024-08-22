import { useState } from 'react'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar';
import { motion } from 'framer-motion'
import Back from '../components/Back';

interface PageType {
    text: string;
    icon: string;
    page: string;
}

interface ContentBoxProps {
    pages: PageType[]
}

function WorkContentBox({ pages }: ContentBoxProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .5
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
                    <h1 className='font-medium text-[#fffffff1]'>What are Josh&apos;s projects?</h1>
                </motion.div>
                <motion.div
                    className='w-full h-5/6 space-y-6'
                >
                    <motion.h1
                        variants={item}
                        className='flex w-full justify-start'
                    >
                        Here are some of Josh&apos;s projects:
                    </motion.h1>
                    <motion.div
                        variants={item} 
                        className='w-[500px] aspect-[5/4] bg-[#1E1F20] rounded-xl p-2'
                        whileHover={{ filter: "brightness(1.1)" }}
                    >
                    </motion.div>
                </motion.div>
                <Back></Back>
            </motion.div>
            <Searchbar></Searchbar>
        </div>
    )
}

export default WorkContentBox