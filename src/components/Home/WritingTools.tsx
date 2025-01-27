import Image from 'next/image'
import React from 'react'

function WritingTools() {
  return (
    <div className='text-white container mx-auto mt-20'>
      <h1 className='text-center text-4xl font-semibold'>54 exciting writing tools</h1>
      <p className='mt-5 text-center'>AI engines take information from various sources and read {''} <br /> them like a human would do</p>
      <div className='grid lg:grid-cols-4 gap-5 mt-10'>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
        <div className='bg-[#282A37] p-3 rounded-lg'>
          <div className='flex gap-5 items-center'>
            <Image src='/assets/images/tools/image 318.png' alt='tools' width={35} height={35} />
            <div>
              <h1>Blog Headlines</h1>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

        </div>
      </div>
      <div className='text-center mt-10'>
      <button className='btn btn-outline text-white'>See all 54 available tool</button>
      </div>
    </div>
  )
}

export default WritingTools