import React from 'react';
import Header from '../components/Header';
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
                    <h1 className='font-medium text-[#fffffff1]'>Show me Josh&apos;s work experience?</h1>
                </motion.div>
                <motion.div
                    className='w-full h-full flex flex-col items-start justify-start space-y-6 overflow-y-auto p-6'
                >
                    <motion.h1
                        variants={item}
                        className='flex w-full justify-start'
                    >
                        Here is Josh&apos;s work experience:
                    </motion.h1>
                    <motion.div
                        className='w-full flex flex-col xl:flex-row justify-start items-center space-y-6 xl:space-y-0 xl:space-x-6'
                        variants={item}
                    >
                        <div className='bg-[#1E1F20] aspect-square w-1/2 xl:w-1/3 max-w-48 rounded-xl p-6 flex items-center justify-center'>
                            <img className='xl:h-full w-3/4 xl:w-fit' src={'/images/humana.png'} alt={'humana logo'} />
                        </div>
                        <div className='flex flex-col items-start justify-start xl:h-full w-full xl:w-3/4 space-y-6'>
                            <h1 className='font-semibold text-2xl'>Humana - <span className='italic'>Full Stack Engineer II</span></h1>
                            <div className='xl:columns-2 gap-6'>
                                <p>Josh currently works as a full stack at Humana. Here, he is working on a team to help modernize Humana&apos;s enrollment application process. As an engineer, Josh Kim streamlines large-scale data processing by integrating PySpark with Databricks, modernizes a RESTful API for improved scalability, and works on ETL process to automate application transformations. He optimizes data transfer performance, cloud resource usage, and ensures compliance with data governance standards. His efforts also improve operational transparency and team productivity through Agile practices and Azure DevOps optimization.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='w-full flex flex-col xl:flex-row justify-start items-center space-y-6 xl:space-y-0 xl:space-x-6'
                        variants={item}
                    >
                        <div className='bg-[#1E1F20] aspect-square w-1/2 xl:w-1/3 max-w-48 rounded-xl p-6 flex items-center justify-center'>
                            <img className='xl:h-full w-3/4 xl:w-fit' src={'/images/herd.png'} alt={'herd logo'} />
                        </div>
                        <div className='flex flex-col items-start justify-start xl:h-full w-full xl:w-3/4 space-y-6'>
                            <h1 className='font-semibold text-2xl'>The Herd Startup - <span className='italic'>Startup Intern</span></h1>
                            <div className='xl:columns-2 gap-6'>
                                <p>In the spring semester of 2023, Josh worked as a Startup Intern at the Herd Startup in Atlanta, Georgia. Josh Kim collaborated in creating a test audience of over 200 users for MVP evaluation with the University of Arkansas. He prepared and executed launch protocols, managed a test environment, and collected feedback. Additionally, he helped launch a beta app in TestFlight, monitored in-app performance, and tracked user engagement. He also analyzed data from Google Analytics, resulting in improved user engagement and providing actionable insights for strategic decisions by leadership and investors.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <Back></Back>
            </motion.div>
            <Searchbar></Searchbar>
        </div>
    )
}

export default WorkContentBox