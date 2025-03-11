import React from 'react'

export default function PersonCard({name, title, iconurl}) {
  return (
    <div class="flex items-center gap-4 p-4 m-2 border w-70">
        <div>
            <p class="text-3xl">{name}</p>
            <p class="text-md">{title}</p>
        </div>
        <div className='w-full'>
            <img class="object-cover rounded" src={iconurl} alt='' />
        </div>
    </div>
  )
}
