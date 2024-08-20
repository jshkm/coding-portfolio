"use client";
import { useState } from 'react'
import { motion } from 'framer-motion'
import ResumeContentBox from './ResumeContentBox';
import Sidebar from '../components/Sidebar'
import pages from '../../data/pages'

function ResumePage() {

  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const currPage = '/resume'

  return (
    <div className='flex h-screen w-screen'>
      <Sidebar pages={pages} currPage={currPage} isVisible={isVisible} setIsVisible={setIsVisible} isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
      <motion.div
        className={`flex justify-center items-center ${isVisible ? 'w-[calc(100vw-320px)]' : 'w-screen'}`}
        layout
        transition={{ type: "spring", stiffness: 77, damping: 16 }}
      >
        <ResumeContentBox pages={pages}></ResumeContentBox>
      </motion.div>
    </div>
  )
}

export default ResumePage