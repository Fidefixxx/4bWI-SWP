import React, { useEffect } from "react";
import PersonCard from "./PersonCard";

export default function PeopleContainer() {
  useEffect(()=>{

    fetch("https://67d4412fd2c7857431ed076b.mockapi.io/Person").then(res => res.json().then(data=>{
      console.log(data);
      people = data;

    }))
  },[])
  return (
    <div>
      <div>PeopleContainer</div>
      <div class="grid grid-cols-2 gap-x-5 m-3 md:grid-cols-4 lg:grid-cols-6">
        {people.map(element => {
          return <div></div>

        })}
      </div>
    </div>
  );
}
