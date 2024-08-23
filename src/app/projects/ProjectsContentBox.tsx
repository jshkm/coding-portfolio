import React from 'react';
import Header from '../components/Header'
import Searchbar from '../components/Searchbar';
import { motion } from 'framer-motion'
import Back from '../components/Back';
import { useRouter } from 'next/navigation'

interface PageType {
    text: string;
    icon: string;
    page: string;
}

interface ContentBoxProps {
    pages: PageType[]
}

function WorkContentBox({ pages }: ContentBoxProps) {
    const router = useRouter()

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

    const projects = [
        [
            { 'name': 'Coding Portfolio', 'url': 'https://github.com/jshkm/coding-portfolio', 'image': '/images/coding.png', 'description': "A website built with React, Next.js and Typescript hosting Josh's professional work." },
            { 'name': 'Photography E-Commerce Website', 'url': 'https://github.com/jshkm/photo-portfolio', 'image': '/images/photo.jpg', 'description': 'A full stack project built with a Next.js frontend and a Flask App backend in Python, with Stripe and SendGrid APIs.' }
        ],
        [
            { 'name': 'Auto Industry Portal iOS and Android App', 'url': 'https://github.com/JuniorDesign2311/JIA2311-TheRedline', 'image': '/images/redline.jpg', 'description': "An app for the car community to view and create car events. Built with a React frontend, Firebase backend and Google Maps integration." },
            { 'name': 'Tic Tac Toe Two', 'url': 'https://github.com/jshkm/tic-tac-toe-two', 'image': '/images/tic-tac-toe-two.jpg', 'description': 'A fun project to brush up on Next.js and Tailwind CSS skills. Deployed with Vercel.' }
        ],
        [
            { 'name': 'Movie Visualization', 'url': 'https://github.com/jshkm/d3-project', 'image': '/images/d3.jpg', 'description': "A visualization built with HTML, CSS, JavaScript, and integrated with the D3 JavaScript library. This graph takes movie information and creates a scatterplot to discover trends." },
            { 'name': 'Tic Tac Toe Two', 'url': 'https://github.com/jshkm/tic-tac-toe-two', 'image': '/images/tic-tac-toe-two.jpg', 'description': 'A fun project to brush up on Next.js and Tailwind CSS skills. Deployed with Vercel.' }
        ]
    ]

    return (
        <div className='flex flex-col justify-between items-center h-full w-full py-6'>
            <Header></Header>
            <motion.div
                className='flex flex-col items-center justify-between w-full h-5/6 space-y-6 p-2'
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    className='flex w-full h-20 justify-start items-center space-x-2 text-3xl text-wrap px-6'
                    variants={item}
                >
                    <img className='min-h-9 h-9 rounded-full' src={'/images/me.jpg'} alt={'icon'}></img>
                    <h1 className='font-medium text-[#fffffff1]'>What are Josh&apos;s projects?</h1>
                </motion.div>
                <motion.div
                    className='w-full h-full space-y-6 overflow-y-auto p-6'
                >
                    <motion.h1
                        variants={item}
                        className='flex w-full justify-start'
                    >
                        Here are some of Josh&apos;s projects:
                    </motion.h1>
                    <div className='flex flex-col w-full space-y-6 justify-center'>
                        {projects.map((project, i) => (
                            <div key={i} className='flex flex-col xl:flex-row w-full xl:space-x-6 space-y-6 xl:space-y-0'>
                                <motion.button
                                    variants={item}
                                    className='flex w-full items-center justify-around h-56 bg-[#1E1F20] rounded-xl'
                                    whileHover={{ filter: "brightness(1.1)" }}
                                    onClick={() => router.push(project[0].url)}
                                >
                                    <img className='h-5/6 rounded-xl drop-shadow-md' src={project[0].image} alt={project[0].name}></img>
                                    <div className='flex flex-col w-1/2 h-5/6 items-start justify-center py-6 text-left space-y-2'>
                                        <p className=''>{project[0].name}</p>
                                        <p>{project[0].description}</p>
                                    </div>
                                </motion.button>
                                <motion.button
                                    variants={item}
                                    className='flex w-full items-center justify-around h-56 bg-[#1E1F20] rounded-xl'
                                    whileHover={{ filter: "brightness(1.1)" }}
                                    onClick={() => router.push(project[1].url)}
                                >
                                    <img className='h-5/6 rounded-xl drop-shadow-md' src={project[1].image} alt={project[1].name}></img>
                                    <div className='flex flex-col w-1/2 h-5/6 items-start justify-center py-6 text-left space-y-2'>
                                        <p className=''>{project[1].name}</p>
                                        <p>{project[1].description}</p>
                                    </div>
                                </motion.button>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <Back></Back>
            </motion.div>
            <Searchbar></Searchbar>
        </div>
    )
}

export default WorkContentBox