import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10">
        <div className="flex-1">
            <Link href="/" passHref className='btn btn-ghost text-xl'>
                valcord
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link href="/projects" passHref className='font-semibold'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/graphics" passHref className='font-semibold'>
                        Graphics
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" passHref className='font-semibold'>
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link href="/contactme" passHref className='font-semibold'>
                        Contact me
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
