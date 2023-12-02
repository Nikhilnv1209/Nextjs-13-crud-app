import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <main className='bg-slate-600 h-[10vh] flex justify-center items-center gap-[10rem] text-[20px] text-white'>
        <Link className='border px-4 rounded-md' href="/">
            Home
        </Link>
        <Link className='border px-4 rounded-md' href="/AddUser">
            Add user
        </Link>
        <Link className='border px-4 rounded-md' href="/users">
            Users
        </Link>
        <Link className='border px-4 rounded-md' href="/about">
            About
        </Link>
    </main>
    </>
  )
}

export default Header