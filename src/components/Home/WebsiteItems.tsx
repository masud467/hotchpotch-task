import React from 'react'

function WebsiteItems() {
  return (
    <div className='text-white mt-20 container mx-auto'>
      <h1 className='text-center text-4xl font-semibold'>Midland helps you
      build beautiful website</h1>
      <div className='flex lg:flex-row flex-col justify-center mt-10 gap-10'>
        <div className='space-y-6 w-[300px] p-3'>
         <div className=''>
         <button className="btn btn-outline w-full flex justify-start text-white   hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
         Blog Headlines
      </button>
         </div>
         <div>
         <button className="btn btn-outline w-full flex justify-start text-white  hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
         Blog Intros
      </button>
         </div>
         <div>
         <button className="btn btn-outline w-full flex justify-start text-white  hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
         Content Rewriter
      </button>
         </div>
         <div>
         <button className="btn btn-outline w-full flex justify-start text-white hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
         Facebook Ads
      </button>
         </div>
         <div>
         <button className="btn btn-outline w-full flex justify-start text-white hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
         Product Description
      </button>
         </div>
         <div>
         <button className="btn btn-outline w-full flex justify-start text-white hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
         PAS Copywriting Formula
      </button>
         </div>
        </div>
          <div className='bg-[#282A37] rounded-lg p-5'>
            <div className="flex items-center justify-start gap-2 ">
             <div className="h-3 w-3 rounded-full bg-red-500"></div>
             <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
             <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <h5 className='my-5'>4 Blog Headlines Generated</h5>
            <hr />
            <div>
              <p className='my-5'>Create original content that ranks for SEO</p>
              <hr  className='text-[#313342] bg-[#313342]'/>
              <p className='my-5'>Any mechanical keyboard enthusiasts in design?</p>
              <hr />
              <p className='my-5'>The More Important the Work, the More Important the Rest</p>
              <hr />
              <p className='my-5'>How to design a product that can grow itself 10x in year</p>
              <hr />
              <p className='mt-5'>Any mechanical keyboard enthusiasts in design?</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WebsiteItems