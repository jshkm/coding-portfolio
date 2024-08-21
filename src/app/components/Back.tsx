import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

function Back() {
    const router = useRouter();

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <motion.button 
            className='flex items-center w-40 h-12 justify-center space-x-2 text-[#fffffff1] bg-[#1E1F20] rounded-full'
            whileHover={{ filter: "brightness(1.1)" }}
            onClick={() => router.push('/home')}
            variants={item}
        >
            <img className='' src={'/icons/back-icon.svg'} alt={'back icon'}></img>
            <div>Back to home</div>
        </motion.button>
    )
}

export default Back