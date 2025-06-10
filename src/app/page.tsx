"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function IntroPage() {
  const router = useRouter()

  const handleHome = () => {
    router.push('/home')
  }

  useEffect(() => {
    handleHome()
  })

  return (
    <></>
  )
}

export default IntroPage