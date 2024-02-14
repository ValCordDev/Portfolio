import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl" href='/#'>valcord</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a className='font-semibold' href='/projects'>Projects</a></li>
            <li><a className='font-semibold' href='/graphics'>Graphics</a></li>
            <li><a className='font-semibold' href='/gallery'>Gallery</a></li>
            <li><a className='font-semibold' href='/contactme'>Contact me</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar