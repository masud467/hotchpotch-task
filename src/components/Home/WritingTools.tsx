import Image from 'next/image';
import React from 'react';

function WritingTools() {
  return (
    <div className="text-white container mx-auto mt-20 px-5">
      {/* Title Section */}
      <h1 className="text-center text-2xl md:text-4xl font-semibold">54 Exciting Writing Tools</h1>
      <p className="mt-5 text-sm md:text-base text-center">
        AI engines take information from various sources and read <br className="hidden md:block" /> them like a human would do
      </p>

      {/* Tools Grid Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-[#282A37] p-5 rounded-lg flex gap-5 items-center">
            <Image src="/assets/images/tools/image 318.png" alt="tools" width={35} height={35} />
            <div>
              <h1 className="text-lg font-semibold">Blog Headlines</h1>
              <p className="text-sm">Write a better blog title with our A.I tool.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="text-center mt-10">
        <button className="btn btn-outline text-white px-6 py-2 border-white hover:bg-white hover:text-black transition-all">
          See all 54 available tools
        </button>
      </div>
    </div>
  );
}

export default WritingTools;
