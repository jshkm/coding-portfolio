"use client";
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import WorkContentBox from './WorkContentBox';
import Sidebar from '../components/Sidebar'
import pages from '../../data/pages'

function WorkPage() {
  const ref = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)
  const currPage = '/work'



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    
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
        <WorkContentBox pages={pages}></WorkContentBox>
      </motion.div>
    </div>
  )
}

export default WorkPage