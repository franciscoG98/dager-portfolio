'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

function Navbar() {

  const segment = useSelectedLayoutSegment()

  return (
    <nav className='border-purple-700 border-2 w-2/3 p-2 rounded-md flex mx-auto mt-4 items-center justify-between'>
      <Link href='/' className='flex gap-2 items-center font-semibold hover:underline'>
        <Image
          className="rounded-full"
          src="/dager-logo.png"
          alt="Dot Dager"
          width={50}
          height={50}
          priority
        />
        <span className='text-2xl'>
          Dot Dager
        </span>
      </Link>

      <div className="flex gap-6">
        <Link
          className={`text-lg focus-visible:border-purple-700 hover:text-purple-700 ${'/' + segment === '/about' ? 'underline' : ''}`}
          href='/about'
        >
          About
        </Link>
        <Link
          href='/my-story'
          className={`text-lg focus-visible:border-purple-700 hover:text-purple-700 ${'/' + segment === '/my-story' ? 'underline' : ''}`}
        >
          My Story
        </Link>
        <Link
          href='/lumberjack'
          className={`text-lg focus-visible:border-purple-700 hover:text-purple-700 ${'/' + segment === '/lumberjack' ? 'underline' : ''}`}
        >
          Lumber Jack
        </Link>
      </div>
    </nav>
  )
}

export default Navbar