import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10">
        <div className="flex-1">
            <Link href="/" passHref>
                <a className="btn btn-ghost text-xl">valcord</a>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link href="/projects" passHref>
                        <a className='font-semibold'>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/graphics" passHref>
                        <a className='font-semibold'>Graphics</a>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" passHref>
                        <a className='font-semibold'>Gallery</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contactme" passHref>
                        <a className='font-semibold'>Contact me</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
