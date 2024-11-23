import React from 'react'

function LumberJackGame() {
  return (
    <main className='mb-24'>
      <h1 className='text-4xl text-center my-4 font-semibold'>Lumber Jack Game</h1>
      <iframe
        className="w-full h-screen mx-4 sm:w-fit sm:mx-auto sm:h-[500px] md:h-[550px] 2xl:h-[660px] rounded-md"
        title="Lumber Jack Game"
        src="https://tbot.xyz/lumber/"
        width="400"
        height="500"
      ></iframe>
    </main>
  )
}

export default LumberJackGame