"use client";
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ResumeContentBox from './ResumeContentBox';
import Sidebar from '../components/Sidebar'
import pages from '../../data/pages'

function ResumePage() {
  const ref = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const currPage = '/resume'

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth])

  return (
    <div
      ref={ref}
      className='flex h-screen w-screen'
    >
      <Sidebar pages={pages} currPage={currPage} isVisible={isVisible} setIsVisible={setIsVisible} isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
      <motion.div
        className={`flex justify-center items-center ${isVisible ? 'pointer-events-none md:pointer-events-auto w-screen md:w-[calc(100vw-320px)]' : 'w-screen'}`}
        layout
        animate={{ opacity: isVisible ? (windowWidth < 768 ? 0.5 : 1) : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ResumeContentBox pages={pages}></ResumeContentBox>
      </motion.div>
    </div>
  )
}

export default ResumePage