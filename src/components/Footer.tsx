import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footerLinks = [
  {
    label: 'Youtube',
    link: 'https://www.youtube.com/@DotDager',
    icon: '/icons/youtube.svg',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/dager.32',
    icon: '/icons/instagram.svg',
  },
  {
    label: 'Github',
    link: 'https://www.github.com/MarianoVilla',
    icon: '/icons/github.svg',
  },
  {
    label: 'Twitch',
    link: 'https://www.twitch.tv/dagerxiv',
    icon: '/icons/twitch.svg',
  },
  {
    label: 'Linktree',
    link: 'https://linktr.ee/dotdager',
    icon: '/icons/linktree.svg',
  },
]

export default function Footer() {
  return (
    <footer className='border-purple-700 border-t-2 w-full fixed bottom-0 p-3 bg-inherit'>
      <section className='flex w-fit mx-auto gap-4 mt-2'>
        {
          footerLinks.map(i => (
            <Link key={i.label} href={i.link} className='relative group'>
              <Image
                className="rounded-full"
                src={i.icon}
                alt={i.label}
                width={32}
                height={32}
                priority
              />
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center w-max px-4 py-1 text-sm text-purple-900 bg-slate-300 rounded-sm font-semibold"
              >
                {i.label}
              </span>
            </Link>
          ))
        }
      </section>
    </footer>
  )
}
