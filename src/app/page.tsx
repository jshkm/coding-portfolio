"use client";
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContentBox from './components/ContentBox';

function HomePage() {
  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  const pages = [{ 'text': 'Who is Josh Kim?', 'icon': '/icons/person-icon.svg' },
  { 'text': "Show me Josh's work experience?", 'icon': '/icons/code-icon.svg' },
  { 'text': "What are Josh's projects?", 'icon': '/icons/github-icon.svg' },
  { 'text': "Where can I find Josh's resume?", 'icon': '/icons/resume-icon.svg' }
  ]

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
      <div className={`relative h-full ${isVisible ? 'w-80' : 'w-0'}`}>
        <div className='absolute top-0 left-0 p-6 z-10'>
          <button
            onClick={handleClick}
          >
            <img className='scale-x-[1.4] scale-y-125 min-w-[18px]' src={'/icons/menu-icon.svg'} alt={'menu icon'}></img>
          </button>
        </div>
        <AnimatePresence onExitComplete={() => setIsOpen(false)}>
          {isVisible && (
            <motion.div
              className={`h-full ${isOpen ? 'w-80' : 'w-0'} bg-[#1E1F20] flex flex-col justify-center p-6 z-0 space-y-2`}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              transition={{ type: "spring", stiffness: 77, damping: 16 }}
              exit={{ x: '-100%', opacity: 0 }}
              layout
            >
              <h2 className='font-medium text-[#B1B2B2] text-xl'>Recent</h2>
              <div className='flex flex-col justify-start items-center w-full h-1/2 space-y-2'>
                {pages.map((page, i) => (
                  <motion.button
                    className='flex rounded-2xl w-[300px] items-center space-x-2 py-1 pl-3 bg-[#1E1F20]'
                    style={{ filter: "brightness(1)" }}
                    whileHover={{ filter: "brightness(1.35)" }}
                  >
                    <img className='' src={'/icons/chat-icon.svg'} alt={'chat icon'}></img>
                    <p className='text-[#B1B2B2] text-base'>{page.text}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className={`flex justify-center items-center ${isVisible ? 'w-[calc(100vw-320px)]' : 'w-screen'}`}
        layout
        transition={{ type: "spring", stiffness: 77, damping: 16 }}
      >
        <ContentBox pages={pages}></ContentBox>
      </motion.div>
    </div>
  )
}

export default HomePage