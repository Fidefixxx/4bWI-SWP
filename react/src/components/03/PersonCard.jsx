import React from 'react'

export default function PersonCard({name, title, iconurl}) {
  return (
    <div class="flex items-center gap-4 m-2 border w-full rounded">
        <div class="ml-2">
            <p class="text-2xl">{name}</p>
            <p class="text-sm italic">{title}</p>
        </div>
        <div className='w-full'>
            <img class="w-full h-full object-cover rounded" src={iconurl} alt='' />
        </div>
    </div>
  )
}
