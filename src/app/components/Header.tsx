import { motion } from 'framer-motion'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'

const GridModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.button
                className='flex justify-center items-center h-11 w-11 rounded-full bg-[#131314]'
                style={{ filter: "brightness(1)" }}
                whileHover={{ filter: "brightness(1.55)" }}
                onClick={() => setIsOpen(true)}
            >
                <img className='h-7 min-h-7 min-w-7' src={'/icons/grid-icon.svg'} alt={'grid icon'}></img>
            </motion.button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <motion.div
                    className="fixed inset-0 flex w-screen items-start justify-end p-6 -translate-x-9 translate-y-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <DialogPanel className="flex items-center justify-between w-48 h-24 border-[#292A2C] border-8 bg-[#1B1B1B] rounded-xl">
                        <Link href='https://www.linkedin.com/in/jshkm10/' className='flex flex-col w-1/2 h-full items-center justify-center'>
                            <motion.button whileHover={{ opacity: .7 }}>
                                <img className='h-12 min-h-7 min-w-7' src={'/icons/linkedin-icon.svg'} alt={'linkedin icon'}></img>
                            </motion.button>
                        </Link>
                        <Link href='https://www.instagram.com/joshkim10/' className='flex flex-col w-1/2 h-full items-center justify-center'>
                            <motion.button whileHover={{ opacity: .7 }}>
                                <img className='h-12 min-h-7 min-w-7' src={'/icons/instagram-icon.svg'} alt={'instagram icon'}></img>
                            </motion.button>
                        </Link>
                    </DialogPanel>
                </motion.div>
            </Dialog>
        </>
    )
}

function Header() {
    const router = useRouter()

    return (
        <div className='flex w-full h-10'>
            <div className='flex justify-end items-center h-full w-full space-x-6'>
                <GridModal></GridModal>

                <button onClick={() => router.push('/')}>
                    <img className='rounded-full h-9 max-h-9 min-h-9 min-w-9' src={'/images/me.jpg'} alt={'profile pic'}></img>
                </button>
            </div>
        </div>
    )
}

export default Header