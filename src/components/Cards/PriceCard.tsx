import React from 'react'
interface PriceCardProps {
  price: {
    name: string
    Price: string
    description: string
    features: string[]
  }
}

function PriceCard({price}:PriceCardProps) {
  const {name, Price, description, features} = price
  return (
    <div className='bg-[#282A37] rounded-lg shadow-lg p-6 flex flex-col h-full'>
      <h1 className='mb-5'>{name}</h1>
      <div className='mb-5'>
        <p className='mb-2'>{Price}</p>
        <p>{description}</p>
      </div>
      <div className='flex-grow'>
        <h1 className='mb-5 text-lg font-semibold'>What is included:</h1>
        <div className='space-y-3'>
          {
            features.map((feature:string, index:number) => (
              <div key={index}>{feature}</div>
            ))
          }
        </div>
      </div>
      <div className="mt-5 items-center flex justify-center">
      <button className="btn btn-outline w-full text-white  hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
        Get Started
      </button>
      </div>
    </div>
  )
}

export default PriceCard