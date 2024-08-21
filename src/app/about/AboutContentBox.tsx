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
                    className='flex flex-col justify-between w-full h-3/4 space-y-6 overflow-y-auto'
                >
                    <motion.button
                        className='w-full min-h-1/2 flex flex-col lg:flex-row space-x-2 justify-around items-center border border-red-500'
                        whileHover={{ filter: "brightness(1.1)" }}
                        variants={item}
                    >
                        <img className='h-1/3 lg:h-full aspect-square object-cover rounded-xl' src={'/images/headshot.jpg'} alt={'headshot'}></img>
                        <div className='w-1/2 h-full flex flex-col text-left space-y-6 overflow-y-auto justify-center text-2xl'>
                            <p>Josh is a software developer originally from New Jersey, but now lives in New York City. Josh attended Georgia Tech from the summer of 2020 until the spring of 2023. He received his degree in Computational Media with highest honors.</p>
                            <p>Josh constantly strives to create software that is a joy to use. From the high level design and interface, to the low level 1's and 0's, Josh is passionate about making sure everything works to benefit the user. With this holistic approach to coding, Josh is intent on creating and learning about the best practices to create the best experiences for his users.</p>
                        </div>
                    </motion.button>
                    {/* <motion.button
                        className='w-full h-1/2 flex space-x-2 justify-around items-center'
                        whileHover={{ filter: "brightness(1.1)" }}
                        variants={item}
                    >
                        <div className='w-1/2 h-full flex flex-col text-left space-y-6 overflow-y-auto justify-center text-2xl'>
                            <p>Josh is a software developer originally from New Jersey, but now lives in New York City. Josh attended Georgia Tech from the summer of 2020 until the spring of 2023. He received his degree in Computational Media with highest honors.</p>
                            <p>Josh constantly strives to create software that is a joy to use. From the high level design and interface, to the low level 1's and 0's, Josh is passionate about making sure everything works to benefit the user. With this holistic approach to coding, Josh is intent on creating and learning about the best practices to create the best experiences for his users.</p>
                        </div>
                        <img className='h-full aspect-square object-cover rounded-xl' src={'/images/josh.jpg'} alt={'josh'}></img>
                    </motion.button> */}
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