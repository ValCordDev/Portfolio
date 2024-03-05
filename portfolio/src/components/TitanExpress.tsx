import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TitanExpress = () => {
  return (
    <article className="flex transition hover:shadow-xl bg-base-100 shadow-gray-800/25 m-20 mb-5 rounded-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
            dateTime="2023-04-06"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-neutral-50"
            >
            <span>2023</span>
            <span className="w-px flex-1 bg-neutral-50/50"></span>
            <span>Apr 06</span>
            </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
            <Image
            alt="Titan Express"
            src="/te.png"
            className="aspect-square object-cover rounded-sm"
            width={200}
            height={200}
            />
        </div>

        <div className="flex flex-1 flex-col justify-between align-middle">
            <div
            className="border-s border-gray-900/10 p-4 border-neutral-50/10 sm:!border-l-transparent sm:p-6"
            >
                <Link href="#">
                    <h3 className="font-bold uppercase text-neutral-50">
                    Titan Express (Company)
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-neutral-300">
                    Titan Express is a English speaking Virtual Truck Company (VTC) with members from across the world. Our VTC started at the 6th of April, 2023 as a friend group and has quickly built up to become a large community, focused on delivering the best trucking experience there is.
                </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                href="#"
                className="block bg-teMain px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition duration-300 hover:bg-teMainDark rounded-br-lg rounded-tl-sm"
            >
                Read more
            </a>
            </div>
        </div>
    </article>
  )
}

export default TitanExpress