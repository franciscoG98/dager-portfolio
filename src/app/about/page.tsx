import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <main className="flex flex-col w-2/3 mx-auto mb-24 items-center justify-center">
      <h1 className='text-4xl font-semibold my-8'>About</h1>

      <p className='w-full md:w-[520px] text-xl mx-4 mb-8'>
        I have different passions beside coding. I&apos;m mainly a tech content creator but my expertice is not limited to that.
      </p>

      <article className='flex flex-wrap justify-center gap-4'>
        {/* music */}
        <section className='border border-purple-700 rounded sm pb-4'>
          <h2 className='text-2xl font-semibold my-4 text-center'>Music</h2>
          <div className='flex flex-col md:flex-row mb-4 pl-2 items-center'>
            <p className='w-full md:w-[180px] p-2'>
              I&apos;m a great guitarist, my favourite genre is metal, but when I have 1 or 2 drinks on, I&apos;m Chaqueño Palavecino greatest fear.
            </p>
            <Image
              className="rounded-sm w-full p-2 md:p-0 sm:w-[200px] h-[200px]"
              src="/dager_guitarra.webp"
              alt="Dot Dager playing guitar as a master"
              width={200}
              height={200}
              priority
            />
          </div>

          <p className='text-left md:text-center px-3 text-sm md:text-md'>You can find my music here</p>
          <div className='flex flex-col p-2 md:flex-row gap-2 justify-center'>
            <Link className='flex hover:underline' href={'https://www.youtube.com/c/DagerMusic'} passHref>
              <Image
                src="/icons/youtube.svg"
                alt="youtube"
                width={24}
                height={24}
                priority
              />
              <span>Youtube - DagerMusic</span>
            </Link>

            <Link className='flex hover:underline' href={'https://www.open.spotify.com/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1'} passHref>
              <Image
                src="/icons/spotify.svg"
                alt="spotify"
                width={24}
                height={24}
                priority
              />
              <span>Spotify</span>
            </Link>
          </div>
        </section>

        {/* filosophy - movies */}
        <section className='border border-purple-700 rounded sm pb-4'>
          <h2 className='text-2xl font-semibold my-4 text-center'>Film / Philosophy</h2>
          <div className='flex flex-col md:flex-row mb-4 pl-2 items-center'>
            <p className='w-full md:w-[180px] p-2'>
              On this channel I talk about movies, series and what inner thoughts they generate in me. (I also have a video touching myself)
            </p>
            <Image
              className="rounded-sm w-full p-2 md:p-0 sm:w-[200px] h-[200px]"
              src="/dager_touching.webp"
              alt="Dot Dager touching himself"
              width={200}
              height={200}
              priority
            />
          </div>

          <p className='text-left md:text-center px-3 text-sm md:text-md'>You can find my reviews/reflexions here</p>
          <div className='flex flex-col p-2 md:flex-row gap-2 justify-center'>
            <Link className='flex hover:underline' href={'https://www.youtube.com/@ElAntroDeDager'} passHref>
              <Image
                className=""
                src="/icons/youtube.svg"
                alt="Dot Dager playing guitar as a master"
                width={24}
                height={24}
                priority
              />
              <span>Youtube - ElAntroDeDager</span>
            </Link>
          </div>
        </section>

        {/* cucumbers */}
        <section className='border border-purple-700 rounded sm pb-4'>
          <h2 className='text-2xl font-semibold my-4 text-center'>Cucumbers</h2>
          <div className='flex flex-col md:flex-row mb-4 pl-2 items-center'>
            <p className='w-full md:w-[180px] p-2'>
              I have a weird obssesion with cucumbers. When someone ask me what animal I&apos;d like to be, I always say a cucumber, or better yet, a flying cucumber. I think that&apos;s why I was rejected in my first intervews. Now I just answer I&apos;d like to be a cat.
            </p>
            <Image
              className="rounded-sm w-full p-2 md:p-0 sm:w-[200px] h-[200px]"
              src="/dager_loves-pepinos.webp"
              alt="Cucumber"
              width={200}
              height={200}
              priority
            />
          </div>

          <p className='text-left md:text-center px-3 text-sm md:text-md'>In fact, I create content about cucumbers</p>
          <div className='flex flex-col p-2 md:flex-row gap-2 justify-center'>
            <Link className='flex hover:underline' href={'https://www.reddit.com/r/Cucumbers/'} passHref>
              <Image
                src="/icons/reddit.svg"
                alt="reddit"
                width={24}
                height={24}
                priority
              />
              <span>Cucumbers subReddit</span>
            </Link>

            <Link className='flex hover:underline' href={'https://www.reddit.com/r/1500isplenty/comments/1eb9dyv/i_love_cucumbers/'} passHref>
              <Image
                src="/icons/reddit.svg"
                alt="reddit"
                width={24}
                height={24}
                priority
              />
              <span>Reddit Viral Post</span>
            </Link>
          </div>
        </section>

        {/* Cats */}
        <section className='border border-purple-700 rounded sm pb-4'>
          <h2 className='text-2xl font-semibold my-4 text-center'>Cats</h2>
          <div className='flex flex-col md:flex-row mb-4 pl-2 items-center'>
            <div className='w-[180px] p-2'>
              I have a cat. He is my alibi.
              <h3 className='text-xl mt-4 font-semibold'>About my cat</h3>
              <ul className='mt-2'>
                <li>Name: Wordpress</li>
                <li>Favourite meal: cucumbers</li>
                <li>Race: Cat</li>
              </ul>
            </div>
            <Image
              className="rounded-sm w-full p-2 md:p-0 sm:w-[200px] h-[200px]"
              src="/dager_gato.webp"
              alt="Dot Daget cat"
              width={200}
              height={200}
              priority
            />
          </div>

        </section>
      </article>
    </main>
  )
}
