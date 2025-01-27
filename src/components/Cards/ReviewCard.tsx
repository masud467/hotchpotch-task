import Image from 'next/image'
import React from 'react'

interface ReviewCardProps {
  review: {
    name: string
    twitterUsername: string
    twitterIcon: string
    image: string
    review: string
    commit: string
  }
}


function ReviewCard({review}: ReviewCardProps) {
  const {name, twitterUsername,twitterIcon, image, review: reviewText, commit} = review
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 text-black'>
      <div className='flex justify-between mb-5 '>
        <div className='flex gap-2'>
          <div>
            <Image src={image} alt={name} width={45} height={45} />
          </div>
          <div>
            <h3 className=' font-semibold'>{name}</h3>
            <p>{twitterUsername}</p>
          </div>
        </div>
        <div><Image src={twitterIcon} alt={name} width={20} height={20} /></div>
      </div>
      <p>{reviewText}</p>
      <p className='text-[#0EA5E9]'>{commit}</p>
    </div>
  )
}

export default ReviewCard