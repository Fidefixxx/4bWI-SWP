import React from 'react'

export default function List({length,data}) {
    return (
        <div>
            <ul class="">
                {data.slice(0, length).map((item, index) => (
                    <li class="w-fit border-2 border-black m-3 p-2 pl-3 bg-blue-400 font-medium hover:border-gray hover:bg-blue-200 hover:cursor-pointer">{item}</li>
                ))}
            </ul>
        </div>
    )
}

