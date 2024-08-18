import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    const [isVisible, setIsVisible] = useState(true)

    const handleClick = () => {
        // sets animation to false so modal exits
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        setIsVisible(isOpen)
    }, [isOpen])

    return (
        // <div className={`h-screen w-80 ${isOpen && 'bg-[#1E1F20]'} transition-colors duration-300`}>
        //     <button
        //         onClick={() => setIsOpen(!isOpen)}>
        //         <img src={'/icons/menu-icon.svg'} alt={'menu icon'}></img>
        //     </button>
        // </div>
        <div className="relative h-screen">
            <button
                className="absolute top-0 left-0 w-80 p-6 border-red-500 border z-10"
                onClick={handleClick}
            >
                <img src={'/icons/menu-icon.svg'} alt={'menu icon'}></img>
            </button>
            <AnimatePresence onExitComplete={() => setIsOpen(false)}>
                {isVisible && (
                    <motion.div
                        className={`h-full w-80 bg-[#1E1F20] flex flex-col justify-center p-6 z-0`}
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ type: "spring", stiffness: 77, damping: 16 }}
                        exit={{ x: '-100%' }}
                        >
                        <p>hello</p>
                        <p>ollo</p>
                        <p>ollo</p>
                        <p>ollo</p>
                        <p>ollo</p>
                        <p>ollo</p>
                        {/* Sidebar content */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Sidebar