"use client"
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

function IntroPage() {
  const router = useRouter()

  const [isVisible, setIsVisible] = useState(true)

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

  const handleHome = () => {
    router.push('/home')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
    }, 4500);

    return () => clearInterval(interval);
  }, [])

  return (
    <motion.div
      className='flex flex-col w-screen h-screen items-center justify-center'
      variants={container}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence onExitComplete={handleHome}>
        {isVisible && (
          <motion.button
            className='flex relative items-center justify-center w-3/4 rounded-full p-6 text-4xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 77, damping: 16 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            whileHover={{ filter: "brightness(1.25)" }}
          >
            <motion.div variants={item}></motion.div>
            <motion.div className='absolute bg-[#1E1F20] w-full rounded-full h-20' variants={item}></motion.div>
            <motion.p className='z-10' variants={item}>Who&nbsp;</motion.p>
            <motion.p className='z-10' variants={item}>is&nbsp;</motion.p>
            <motion.p className='z-10' variants={item}>Josh&nbsp;</motion.p>
            <motion.p className='z-10' variants={item}>Kim?</motion.p>
            <motion.span variants={item} className="blinking-cursor"></motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>

  )
}

export default IntroPage