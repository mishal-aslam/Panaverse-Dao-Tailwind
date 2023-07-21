import React from 'react'
import Logo from "/public/logo.png"
import Image from "next/image"
import Link from 'next/link'
import CoreTracks from './CoreTracks'

const Header = () => {
  return (
    <header className='flex justify-between max-w-screen mx-auto bg-teal-600 backdrop-opacity-60 backdrop-invert bg-teal-600/90 py-2 px-20 sticky top-0 items-center' >
      {/* logo */}
      <div>
        {/* <h2 className='text-xl font-bold text-white'>Panaverse Dao</h2> */}
        <Image src={Logo} alt="Panaverse dao logo" />
      </div>
      {/* navigation bar */}
      <ul className='flex space-x-8 font-semibold text-black'>
        <Link href='/'>Home</Link>
        <Link href='/courses'>Course</Link>
      </ul>
    </header>
  )
}

export default Header


