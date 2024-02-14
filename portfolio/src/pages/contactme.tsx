import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import GithubPages from '@/components/GithubPages'
import Footer from '@/components/Footer'
import FeaturedProjects from '@/components/FeaturedProjects'
import TitanExpress from '@/components/TitanExpress'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-base-200'>
      <Navbar />
    <div className='grid md:grid-cols-2 grid-cols-1 p-52'>
        <div>
            <h5 className="text-md">Say hey</h5>
            <h1 className='text-6xl font-bold my-2'>Contact me</h1>
            <div className='m-5'>
                <p className='text-lg mb-10'>I am always open to new opportunities and collaborations. Feel free to reach out to me for any inquiries or just to say hi.</p>

                <input className="input w-full my-2 rounded-none" placeholder='name' />
                <input className="input w-full my-2 rounded-none" placeholder='email' />
                <input className="input w-full my-2 rounded-none" placeholder="Lorem..." />

                <button className="btn btn-primary w-full my-2 rounded-none">Send</button>
            </div>
        </div>
        <div>
            <div className="flex text-lg justify-center pl-5 flex-col py-10">
                <p className='text-neutral-400 font-semibold'>Availability</p>
                <p className= 'font-light'>
                    I typically respond to emails within 24 hours. This may vary depending on the volume of emails I receive and my current workload.
                </p>
            </div>
            <div className="flex text-lg justify-center pl-5 flex-col py-10">
                <p className='text-neutral-400 font-semibold'>Support</p>
                <p className= 'font-light'>developingcuber@gmail.com</p>
                <p className= 'font-light'>Discord: valcord</p>
            </div>
        </div>
    </div>
      <Footer />
    </main>
  )
}
