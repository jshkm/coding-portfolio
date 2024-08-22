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
        <div className='flex flex-col justify-between items-center h-full w-full py-6'>
            <Header></Header>
            <motion.div
                className='flex flex-col items-center justify-between w-full h-5/6 space-y-6'
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    className='flex w-full h-20 justify-start items-center space-x-2 text-3xl text-wrap px-6'
                    variants={item}
                >
                    <img className='min-h-9 h-9 rounded-full' src={'/images/me.jpg'} alt={'icon'}></img>
                    <h1 className='font-medium text-[#fffffff1]'>Who is Josh Kim?</h1>
                </motion.div>
                <motion.div
                    className='flex flex-col justify-between w-full h-full overflow-y-auto space-y-6 overflow-x-hidden p-6'
                >
                    <motion.h1
                        variants={item}
                        className='flex w-full justify-start'
                    >
                        Here is some information about Josh:
                    </motion.h1>
                    <motion.div
                        className='w-full flex flex-col xl:flex-row xl:space-x-6 space-y-4 justify-around items-center'
                        variants={item}
                    >
                        <img className='w-1/2 xl:w-1/3 aspect-square object-cover rounded-xl' src={'/images/headshot.jpg'} alt={'headshot'}></img>
                        <div className='w-full xl:w-2/3 flex flex-col text-left justify-start'>
                            <div className=''>
                                <p>Josh is a software developer originally from New Jersey, but now lives in New York City. He attended Georgia Tech from the summer of 2020 until the spring of 2023. He received his degree in Computational Media with highest honors. Josh constantly strives to create software that is a joy to use. From the high level design and interface, to the low level 1&apos;s and 0&apos;s, Josh is passionate about making sure everything works to benefit the user. With this holistic approach to coding, Josh is intent on creating and learning about the best practices to create the best experiences for his users.</p>
                            </div>
                        </div>
                        

                    </motion.div>
                    <motion.div
                        className='w-full flex flex-col xl:flex-row xl:space-x-6 space-y-4 justify-around items-center'
                        variants={item}
                    >
                        <div className='w-full xl:w-2/3 flex flex-col text-left justify-start'>
                            <div className=''>
                                <p>In his free time, Josh is also an avid photographer. He shoots portraits, concerts, and sports. However, he likes shooting street photography the best. One of his favorite things to do is travel to a new place, and take as many photos as he can! Josh also loves playing a game called Kendama. Kendama is a Japanese ball and cup toy, consisting of three cups and a spike. Josh often travels to compete at events for this game, and has even come in 10th place at the largest Kendama event in Japan, the Kendama World Cup!</p>
                            </div>
                        </div>

                        <img className='w-1/2 xl:w-1/3 aspect-square object-cover rounded-xl' src={'/images/josh.jpg'} alt={'josh'}></img>
                    </motion.div>
                </motion.div>
                <Back></Back>
            </motion.div>
            <Searchbar></Searchbar>
        </div>
    )
}

export default AboutContentBox