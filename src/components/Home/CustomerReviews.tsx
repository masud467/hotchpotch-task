import React from 'react'
import ReviewCard from '../Cards/ReviewCard'
import reviews  from '../../lib/reviews'


function CustomerReviews() {
  return (
    <div className='text-white mt-20 bg-gradient-to-l from-[#171924] to-[#17192400] p-10'>
      <h1 className='text-center text-4xl font-semibold pt-10'>What our customers say</h1>
      <p className='text-center'>Read why thousands of marketers, writers, and entrepreneurs love us so much.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
        {
          reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        }
      </div>
    </div>
  )
}

export default CustomerReviews