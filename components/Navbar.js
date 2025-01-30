import Link from 'next/link'
import React from 'react'

const Navbar = () =>{
  return (
    <>
    <nav className='h-20 flex justify-between items-center text-blue-200 px-3'>
        <Link href="/" className='brand font-bold text-lg'>Narrow Urls</Link>
        <ul className='flex justify-center items-center gap-2'>
            <li className='flex gap-3'>
                <Link href='https://github.com/HarshYadav152/narrow-urls'><button className='bg-purple-900 shadow-lg p-3 rounded-lg py-1 font-bold'>Github</button></Link>
                <Link href='https://github.com/HarshYadav152/narrow-urls'><button className='bg-purple-900 shadow-lg p-3 rounded-lg py-1 font-bold'>Docs</button></Link>
            </li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar