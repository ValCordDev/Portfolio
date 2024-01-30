import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function gallery() {
  return (
    <main className='bg-base-200'>
        <Navbar />

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pt-20 p-10">
            <div className="grid gap-4">
                <div>
                <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/b6rfQwH.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/ced3P03.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/ebabvE6.jpeg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/4JXUtqF.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/zS4cp6C.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/Cge6uR9.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg bg-teSecondary" src="https://i.imgur.com/eVL4xI4.png" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg bg-teSecondary" src="https://i.imgur.com/IGWId9u.png" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg bg-teSecondary" src="https://i.imgur.com/D8muuV6.png" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/vKSpKCy.png" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/lxzU9gG.png" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg bg-teSecondary" src="https://i.imgur.com/9RJvBFx.png" alt="" />
                </div>
            </div>
        </div>

        <Footer />
    </main>
  )
}


