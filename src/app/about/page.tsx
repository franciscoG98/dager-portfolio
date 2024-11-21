import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <main className="flex flex-col w-2/3 mx-auto mb-8 items-center justify-center">
      <h1 className='text-4xl font-semibold mt-8'>About</h1>

      <p className='w-96 text-xl m-3'>
        I have different passions beside coding. I&apos;m mainly a tech content creator but my expertice is not limited to that.
      </p>

      <article className='flex flex-wrap justify-center gap-4'>
        {/* music */}
        <section className='border border-purple-700 rounded sm pb-4'>
          <h2 className='text-2xl font-semibold my-8 text-center'>Music</h2>
          <div className='flex mb-4 px-2'>
            <p className='w-[180px] p-2'>
              I&apos;m a great guitarist, my favourite genre is metal, but when I have 1 or 2 drinks on, I&apos;m Chaqueño Palavecino greatest fear.
            </p>
            <Image
              className="rounded-sm"
              src="/dager_guitarra.webp"
              alt="Dot Dager playing guitar as a master"
              width={200}
              height={200}
              priority
            />
          </div>

          <p className='text-center'>You can find my music creations here</p>
          <div className='flex gap-2 justify-center'>
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
          <h2 className='text-2xl font-semibold my-8 text-center'>Film / Philosophy</h2>
          <div className='flex mb-4 px-2'>
            <p className='w-[180px] p-2'>
              On this channel I talk about movies, series and what inner thoughts they generate in me. (I also have a video touching myself)
            </p>
            <Image
              className="rounded-sm"
              src="/dager_touching.webp"
              alt="Dot Dager touching himself"
              width={200}
              height={200}
              priority
            />
          </div>

          <p className='text-center'>You can find my reviews/reflexions here</p>
          <div className='flex gap-2 justify-center'>
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
          <h2 className='text-2xl font-semibold my-8 text-center'>Cucumbers</h2>
          <div className='flex mb-4 px-2'>
            <p className='w-[180px] p-2 text-sm'>
              I have a weird obssesion with cucumbers. When someone ask me what animal I&apos;d like to be, I always say a cucumber, or better yet, a flying cucumber. I think that&apos;s why I was rejected in my first intervews. Now I just answer I&apos;d like to be a cat.
            </p>
            <Image
              className="rounded-sm"
              src="/pepino.webp"
              alt="Cucumber"
              width={200}
              height={200}
              priority
            />
          </div>
        </section>

        {/* Cats */}
        <section className='border border-purple-700 rounded sm pb-4'>
          <h2 className='text-2xl font-semibold my-8 text-center'>Cats</h2>
          <div className='flex mb-4 px-2 items-center'>
            <p className='w-[180px] p-2'>
              I have a cat. He is my alibi.
            </p>
            <Image
              className="rounded-sm"
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
