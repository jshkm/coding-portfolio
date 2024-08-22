import { use, useEffect, useState, useRef, } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface PageType {
  text: string;
  icon: string;
  page: string;
}

interface SidebarProps {
  pages: PageType[];
  currPage: string;
  isVisible: boolean;
  setIsVisible: Function;
  isOpen: boolean;
  setIsOpen: Function;
}

function Sidebar({ pages, currPage, isVisible, setIsVisible, isOpen, setIsOpen }: SidebarProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
        setIsOpen(false);
        setIsVisible(false);
      }
    }

    function handleResize() {
      if (mediaQuery.matches) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleClick = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    setIsVisible(newOpenState);
  }

  return (
    <div
      ref={ref}
      className={`absolute md:relative h-full z-10 ${isVisible ? 'w-80' : 'w-0'}`}
    >
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
            className={`h-full ${isOpen ? 'w-80' : 'w-0'} bg-[#1E1F20] drop-shadow-lg md:drop-shadow-none flex flex-col justify-center p-6 z-0 space-y-2`}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ type: "spring", stiffness: 77, damping: 16 }}
            exit={{ x: '-100%' }}
            layout
          >
            <h2 className='font-semibold text-[#B1B2B2] text-xl'>Recent</h2>
            <div className='flex flex-col justify-start -translate-x-3 md:translate-x-0 items-start md:items-center w-full h-1/2 space-y-2'>
              {pages.map((page, i) => (
                <motion.button
                  key={`${i}-${currPage === page.page}`}
                  className={`flex rounded-2xl w-[300px] items-center space-x-2 py-1 pl-3 bg-[#1E1F20] ${currPage == page.page && 'brightness-[1.35]'}`}
                  whileHover={{ filter: "brightness(1.35)" }}
                  onClick={() => router.push(page.page)}
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
  )
}

export default Sidebar