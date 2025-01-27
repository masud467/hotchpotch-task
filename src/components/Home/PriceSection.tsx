import React from 'react'
import prices from '../../lib/prices'
import PriceCard from '../Cards/PriceCard'

function PriceSection() {
  return (
    <div className='mt-20 container mx-auto mb-3'>
      <div className='text-center text-white '>
      <h1 className='font-semibold text-4xl'>Make the wise decision for your business</h1>
      <p>Choose from our affordable 3 packages</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 text-white mt-10 gap-10'> 
        {
          prices.map((price, index) => (
            <PriceCard key={index} price={price} />
          ))
        }
      </div>
      <div className='bg-gradient-to-l from-[#2B59FF] to-[#BB2BFF] rounded-lg p-5 mt-20 flex justify-between items-center'>
        <h1 className='text-white text-[32px] font-semibold w-[530px] '>will help you improve your writing & bring ideas more c learly.</h1>
        <button className='bg-white text-black btn'>Start 14 Days Free Trial</button>
      </div>

    </div>
  )
}

export default PriceSection