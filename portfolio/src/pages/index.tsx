import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline'
import Technologies from '@/components/Technologies'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-base-200'>
      <Navbar />
      <Hero />
      <Technologies />
      <Timeline />
    </main>
  )
}
