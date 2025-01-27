import React from 'react'

function ConveyMessageBanner() {
  return (
    <div className="text-white mt-20 container mx-auto lg:h-[450px] px-5">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-[450px] lg:h-[370px] space-y-5 p-3 text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Write what you want to convey through clear, & authentic writing
          </h1>
          <p className="text-sm lg:text-base">
            AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized
          </p>
          <button className="btn text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-none hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5] w-full lg:w-auto">
            Start 14 Days Free Trial
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-[550px] w-full bg-white rounded-lg text-black p-5 flex lg:flex-row flex-col gap-5">
          {/* Feature List */}
          <div className="w-full lg:w-[125px] space-y-3 text-center lg:text-left">
            <p>Blog Outline</p>
            <p>Blog Intro</p>
            <p>Blog Conclusion</p>
            <p>AIDA</p>
            <p>PAS</p>
            <p>Content Rewriter</p>
          </div>

          {/* Results Section */}
          <div className="w-full lg:w-[350px]">
            <h1 className="text-xl lg:text-2xl font-semibold text-center lg:text-left">Results</h1>
            <p className="my-3 lg:my-5 text-sm lg:text-base text-center lg:text-left">
              Here is what our AI came up with.
            </p>
            <div className="space-y-5">
              {/* Result Block */}
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0 ? 'bg-black' : 'bg-slate-200'
                  } rounded-lg p-3`}
                >
                  <div className="h-1 w-20 bg-blue-500 rounded-full mb-3"></div>
                  <div className="h-1 w-full bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-1 w-4/5 bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-1 w-3/4 bg-gray-300 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConveyMessageBanner
