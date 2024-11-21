import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='border-purple-700 border-2 w-2/3 p-2 rounded-md flex mx-auto mt-4 items-center justify-between'>
      <Link href='/'>
        Logo
      </Link>

      <div className="flex gap-8">
        <Link href='/my-story'>
          My Story
        </Link>
        <Link href='/about'>
          About
        </Link>
        <Link href='/lumberjack'>
          Lumber Jack
        </Link>
      </div>
    </nav>
  )
}

export default Navbar