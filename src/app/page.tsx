"use client";
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function HomePage() {
  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    // sets animation to false so modal exits
    if (isOpen) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
      setIsOpen(true)
    }

  }

  useEffect(() => {
    setIsVisible(isOpen)
    console.log(isVisible)
  }, [isOpen])

  return (
    <div className='flex h-screen w-screen'>
      <div className={`relative h-full border border-red-500 ${isVisible ? 'w-80' : 'w-0'}`}>
        <div className='absolute top-0 left-0 p-6 z-10'>
          <button
            onClick={handleClick}
          >
            <img className='border-red-500 border scale-x-[1.4] scale-y-125 min-w-[18px]' src={'/icons/menu-icon.svg'} alt={'menu icon'}></img>
          </button>
        </div>
        <AnimatePresence onExitComplete={() => setIsOpen(false)}>
          {isVisible && (
            <motion.div
              className={`h-full ${isOpen ? 'w-80' : 'w-0'} bg-[#1E1F20] flex flex-col justify-center p-6 z-0`}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              transition={{ type: "spring", stiffness: 77, damping: 16 }}
              exit={{ x: '-100%', opacity: 0 }}
              layout
            >
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              {/* Sidebar content */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
          className={`flex flex-grow justify-start border-red-500 border`}
          layout
          transition={{ type: "spring", stiffness: 77, damping: 16 }}
      >
        <p>content</p>
      </motion.div>
    </div>
  )
}

export default HomePage