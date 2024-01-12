import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import GithubPages from '@/components/GithubPages'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-base-200'>
      <Navbar />
      <GithubPages />

      <Footer />
    </main>
  )
}
