import React from 'react'
import Image from 'next/image'

export default function MyStory() {
  return (
    <main className="flex flex-col w-2/3 mx-auto mb-8">
      <h1 className="text-4xl font-bold self-center my-4">The story of Dot Dager</h1>

      <section className='mt-4 flex justify-center items-center'>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_guitarra.webp"
          alt="Dot Dager playing guitar as a master"
          width={450}
          height={450}
          priority
        />
        <p className='text-xl ml-4 w-1/2'>I haven&apos;t always been so capo.</p>
      </section>

      <section className='mt-4 flex justify-center items-center'>
        <p className='text-xl ml-4 w-1/2'>In my beginning I was on the streets.</p>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_mendigo2.webp"
          alt="Dot Dager on the streets"
          width={450}
          height={450}
          priority
        />
      </section>

      <section className='mt-4 flex justify-center items-center'>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_selling-himself.webp"
          alt="Dot Dager selling his body"
          width={450}
          height={450}
          priority
        />
        <p className='text-xl ml-4 w-1/2'>I also had to sell my body in order to survive.</p>
      </section>

      <section className='mt-4 flex justify-center items-center'>
        <p className='text-xl ml-4 w-1/2'>But thanks to that I could buy my computer.</p>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_buys-pc.webp"
          alt="Dot Dager buys personal computer"
          width={450}
          height={450}
          priority
        />
      </section>

      <section className='mt-4 flex justify-center items-center'>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_learn-programming.webp"
          alt="Dot Dager learn programming"
          width={450}
          height={450}
          priority
        />
        <p className='text-xl ml-4 w-1/2'>And learn programming.</p>
      </section>

      <section className='mt-4 flex justify-center items-center'>
        <p className='text-xl ml-4 w-1/2'>I also had a cyber criminal phase, but that is another story.</p>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_cybercriminal.webp"
          alt="Dot Dager was a cyber criminal"
          width={450}
          height={450}
          priority
        />
      </section>

      <section className='mt-4 flex justify-center items-center'>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_eats-bread.webp"
          alt="Dot Dager eats bread"
          width={450}
          height={450}
          priority
        />
        <p className='text-xl ml-4 w-1/2'>Now I can eat bread for Christmas.</p>
      </section>

      <section className='mt-4 flex justify-center items-center'>
        <p className='text-xl ml-4 w-1/2'>And be happy by coding falopita.</p>
        <Image
          className="rounded-sm w-1/2"
          src="/dager_codes-falopita.webp"
          alt="Dot Dager codes falopita"
          width={450}
          height={450}
          priority
        />
      </section>

    </main>
  )
}
