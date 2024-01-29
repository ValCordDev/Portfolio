import React from 'react'

const InvestorUka = () => {
  return (
    <article className="flex transition hover:shadow-xl bg-base-100 shadow-gray-800/25 m-20 mb-5 rounded-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
            dateTime="2023-04-06"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-neutral-50"
            >
            <span>2023</span>
            <span className="w-px flex-1 bg-neutral-50/50"></span>
            <span>Nov 13</span>
            </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
            <img
            alt="Investoruka"
            src="https://cdn.discordapp.com/attachments/968076976084639776/1197872004087435284/Investoruka.png"
            className="aspect-square h-full w-full object-cover rounded-sm"
            />
        </div>

        <div className="flex flex-1 flex-col justify-between align-middle">
            <div
            className="border-s border-gray-900/10 p-4 border-neutral-50/10 sm:!border-l-transparent sm:p-6"
            >
                <a href="#">
                    <h3 className="font-bold uppercase text-neutral-50">
                    Oslo Utlån (Investoruka)
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-neutral-300">
                    "Oslo Utlån" is a concept used to let everyone borrow expensive equipment for whatever project they may have. This is a school project, meaning that others from the same school came to invest in one of several companies, where we ended up getting 2nd place.
                </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                href="#"
                className="block bg-iuMain px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition duration-300 hover:bg-teMainDark rounded-br-lg rounded-tl-sm"
            >
                Read more
            </a>
            </div>
        </div>
    </article>
  )
}

export default InvestorUka