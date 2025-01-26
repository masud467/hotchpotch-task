import React from 'react'
import { MdSlowMotionVideo } from "react-icons/md";

export default function Header() {
  return (
    <div className='text-white text-center flex flex-col justify-center items-center mt-16'>
      <div className='w-[500px] h-[450px] space-y-7'>
      <h1 className="text-6xl font-medium">
  Write better content for your{" "}
  <span
    className=" bg-clip-text text-transparent bg-gradient-to-r from-[#FFC947] to-[#FC6739] underline"
  >
    Facebook Ad
  </span>
</h1>


      <p className='text-xl font-semibold'>Artificial intelligence writting tool helps you create blogs, social media websites and much more.</p>
      <button className="btn text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-none hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
      Start 14 Days Free Trial
            </button>
            <br />
            <button className='btn btn-outline text-white '>
            <MdSlowMotionVideo className='mr-2' />
              Watch a demo
            </button>
            </div>
    </div>
  )
}
