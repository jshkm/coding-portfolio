"use client";
import { useState } from 'react'
import { motion } from 'framer-motion'
import HomeContentBox from './HomeContentBox';
import Sidebar from '../components/Sidebar'
import pages from '../../data/pages'

function HomePage() {

  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const currPage = ''

  return (
    <div className='flex h-screen w-screen'>
      <Sidebar pages={pages} currPage={currPage} isVisible={isVisible} setIsVisible={setIsVisible} isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
      <motion.div
        className={`flex justify-center items-center ${isVisible ? 'w-[calc(100vw-320px)]' : 'w-screen'}`}
        layout
        transition={{ type: "spring", stiffness: 77, damping: 16 }}
      >
        <HomeContentBox pages={pages}></HomeContentBox>
      </motion.div>
    </div>
  )
}

export default HomePage