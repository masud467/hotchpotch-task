import React from 'react'


function ContentWithAi() {
  return (
    <div className='text-white mt-20 '>
      <div className='flex lg:flex-row flex-col lg:gap-52 gap-5 items-center justify-center container mx-auto'>
        <div className='bg-[#FFFFFF] text-black rounded-lg p-10 space-y-6 w-[480px] relative'>

         <div className='space-y-3'>
         <h1 className='text-xl font-semibold'>Results</h1>
         <p>Here is what our AI came up with.</p>
         </div>
        
          <div className='space-y-6 bg-slate-200 rounded-lg p-6'>
          <p>Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.</p>
          <p>Agitate: You have no idea how much sales tax to charge your customers in each state.</p>
          <p>Solution: Use TaxSol, our full stack sales tax solution, to manage your sales</p>
          </div>
          <div className='bg-white text-black rounded-lg p-3 h-[104px] w-[200px] absolute bottom-10 lg:-right-20'>
        
      
      <div className="flex items-center justify-start gap-2 ">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

     
      <div className="mt-3">
      
        <div className="h-1 w-20 bg-blue-500 rounded-full mb-3"></div>

        
        <div className="h-1 w-full bg-gray-300 rounded-full mb-2"></div>
        <div className="h-1 w-4/5 bg-gray-300 rounded-full mb-2"></div>
        <div className="h-1 w-3/4 bg-gray-300 rounded-full"></div>
      </div>
    </div>
          
        </div>
        
        
        <div className='space-y-6 w-[490px] p-3'>
          <h1 className='text-4xl font-semibold'>Create content efficiently and quickly with great AI writing tools</h1>
          <p >
          150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.
          </p>
          <button className="btn text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-none hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
      Start 14 Days Free Trial
      </button>
        </div>
      </div>
    </div>
  )
}

export default ContentWithAi