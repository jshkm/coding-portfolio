import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    text: string
}
const Card = ({ text } : CardProps) => {
    return (
        <motion.button
            style={{ filter: "brightness(1)" }}
            whileHover={{ filter: "brightness(1.35)" }}
        >
            <div className='flex justify-start h-[200px] w-[200px] bg-[#1E1F20] rounded-xl p-4'>
                <p>{text}</p>
            </div>
        </motion.button>
    )
}


function ContentBox() {
    return (
        <div className='flex flex-col justify-between items-center h-full w-full px-10 py-6 border border-red-500 '>
            <div className='text-5xl space-y-7'>
                <h1>Hello, welcome to Josh Kim's Portfolio!</h1>
                <h1>How can I help you today?</h1>
            </div>

            <Card text='pepe'></Card>

            <p>Other content</p>
            <p>Search bar... maybe</p>
        </div>
    )
}

export default ContentBox