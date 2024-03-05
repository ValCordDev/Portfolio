import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 

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
        {/* Next.js Image component for optimized image loading */}
        <Image
          alt="Investoruka"
          src="/investoruka.png"
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
              Oslo Utlån (Investoruka)
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-neutral-300">
            &quot;Oslo Utlån&quot; is a concept used to let everyone borrow expensive equipment for whatever project they may have. This is a school project, meaning that others from the same school came to invest in one of several companies, where we ended up getting 2nd place.
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            href="#"
            className="block bg-iuMain px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition duration-300 hover:bg-teMainDark rounded-br-lg rounded-tl-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}

export default InvestorUka;
