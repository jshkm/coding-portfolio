import React from 'react'
import { motion } from 'framer-motion'

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
  return (
    <div className='bg-[#1E1F20] h-16 max-w-[824px] w-full rounded-full'>
        
    </div>
  )
}


function ContentBox({ pages }: ContentBoxProps) {
    return (
        <div className='flex flex-col justify-between items-center h-full w-full px-10 py-6'>
            <div className='flex w-full h-10'>
                <h1>think of something creative to put here</h1>
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