import React from 'react'

export default function AvatarCard(data) {
  return (
    <div class='bg-blue-950 h-85 w-65 text-white m-3 p-2'>
      <img class="border-1 border-white" src="https://www.w3schools.com/howto/img_avatar.png"/>
      <div class="h-15">
        <div class="flex">
          <div class="font-md mr-2">{data.Name} {data.Surname}</div>
          <div class="font-bold">{data.Age}</div>
        </div>
        <div class="text-s italic">{data.Profession}</div>
        <div class="text-xs">{data.Description}</div>
      </div>
    </div>
  )
}
