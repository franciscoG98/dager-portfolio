'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

function Navbar() {

  const segment = useSelectedLayoutSegment()

  return (
    <nav className='border-purple-700 md:border-2 border-b-2 md:w-2/3 p-2 md:rounded-md flex mx-auto md:mt-4 items-center justify-around md:justify-between'>
      <Link href='/' className='flex gap-2 items-center font-semibold hover:underline'>
        <Image
          className="rounded-full"
          src="/dager-logo.png"
          alt="Dot Dager"
          width={50}
          height={50}
          priority
        />
        <span className='hidden text-2xl md:flex'>
          Dot Dager
        </span>
      </Link>

      <div className="flex gap-4 md:gap-6">
        <Link
          className={`text-lg focus-visible:border-purple-700 hover:underline whitespace-nowrap ${'/' + segment === '/about' ? 'text-purple-700' : ''}`}
          href='/about'
        >
          About
        </Link>
        <Link
          href='/my-story'
          className={`text-lg focus-visible:border-purple-700 hover:underline whitespace-nowrap ${'/' + segment === '/my-story' ? 'text-purple-700' : ''}`}
        >
          My Story
        </Link>
        <Link
          href='/lumberjack'
          className={`text-lg focus-visible:border-purple-700 hover:underline whitespace-nowrap ${'/' + segment === '/lumberjack' ? 'text-purple-700' : ''}`}
        >
          Lumber Jack
        </Link>
      </div>
    </nav>
  )
}

export default Navbar