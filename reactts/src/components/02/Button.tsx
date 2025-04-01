import React from 'react'

export default function Button({text} ) {
  return (
    <button className="m-5 w-fit p-8 text-lg bg-blue-400  rounded-md outline-5 outline-blue outline-double hover:cursor-pointer hover:bg-blue-500 hover:outline-solid hover:outline-3">{text}</button>
  )
}
