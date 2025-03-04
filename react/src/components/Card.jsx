import React from 'react'

export default function Card(data) {
  return (
    <div className='bg-blue-950 h-50 color text-white m-3 w-full'>
      <p>{data.name}</p>
      <p>{data.job}</p>
      <p>{data.desc}</p>
    </div>
  )
}
