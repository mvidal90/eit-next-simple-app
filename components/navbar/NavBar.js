
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ActiveLink } from '../activeLink/ActiveLink'

export const NavBar = () => {
  return (
    <nav className='bg-pink-900 text-white flex justify-between p-3'>
        <div className='flex'>
          <Image src={"/images/next.svg"} width={36} height={36}></Image>
          <Link href="/" className='mx-2'><h1>Home</h1></Link>
        </div>
        <div>
            <ActiveLink path="/aboutus" label='Sobre nosotros' />
            <ActiveLink path="/contact" label='Contactanos' />
        </div>
    </nav>
  )
}