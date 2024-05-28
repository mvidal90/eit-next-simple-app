
import React from 'react'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className='bg-pink-900 text-white flex justify-between p-3'>
        <Link href="/" className='mx-2'><h1>Home</h1></Link>
        <div>
            <Link href="/aboutus" className='mx-2'>Sobre nosotros</Link>
            <Link href="/contact" className='mx-2'>Contactanos</Link>
        </div>
    </nav>
  )
}