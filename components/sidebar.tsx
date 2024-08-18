"use client";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react'

function Sidebar() {
    const [isVisible, setIsVisible] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleBack = () => {
        // sets animation to false so modal exits
        setIsVisible(false)
    }

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
        }
    }, [isOpen])

    return (
        <>
            <motion.button
                onClick={handleOpen}
                disabled={isOpen}>
                <img className={'menu-icon'} src={'/icons/menu-icon.svg'} alt={'menu icon'}></img>
            </motion.button>
            <Dialog open={isOpen} onClose={() => console.log('no')} className="relative">
                <AnimatePresence onExitComplete={() => setIsOpen(false)}>
                    {isVisible && (
                        <motion.div
                            key='modal'
                            initial={{ x: '-100%' }}
                            animate={{ x: '0%' }}
                            transition={{ type: "spring", stiffness: 77, damping: 16 }}
                            exit={{ x: '-100%' }}
                            className="fixed inset-0 flex items-center justify-start">
                            <DialogPanel className="h-screen w-screen md:w-[33vw] bg-[#1E1F20]">
                                <div className='flex flex-col justify-between w-full h-full'>
                                    <div className='flex flex-col justify-between h-3/4 space-y-4'>
                                        <button onClick={handleBack}>
                                            <img className='max-h-8' src={'/icons/menu-icon.svg'} alt={'menu icon'}></img>
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Dialog>
        </>
    )
}

export default Sidebar