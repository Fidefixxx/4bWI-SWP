import React from 'react'

export default function AvatarCard(data) {
  return (
    <div className='bg-blue-950 h-85 w-65 text-white m-3 p-2'>
      <img className="border-1 border-white" src="https://www.w3schools.com/howto/img_avatar.png"/>
      <div className="h-15">
        <div className="flex">
          <div className="font-md mr-2">{data.Name} {data.Surname}</div>
          <div className="font-bold">{data.Age}</div>
        </div>
        <div className="text-s italic">{data.Profession}</div>
        <div className="text-xs">{data.Description}</div>
      </div>
    </div>
  )
}
