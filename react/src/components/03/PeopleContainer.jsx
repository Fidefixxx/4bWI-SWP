import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

export default function PeopleContainer() {
  const [people, setPeople] = useState([])

  useEffect(()=>{
    fetch("https://67d4412fd2c7857431ed076b.mockapi.io/Person").then(res => res.json().then(data=>{
      data.forEach(element => {
        element.picture=`https://picsum.photos/id/${element.id}/200`
      });
      setPeople(data);

    }))
  },[])
  return (
    <div>
      <div>PeopleContainer</div>
      <div class="grid grid-cols-2 gap-x-5 m-3 md:grid-cols-4 lg:grid-cols-6">
        {people.map(element => {
          console.log(element)
          return <PersonCard name={element.name} title={element.job} iconurl={element.picture}/> 
        })}
      </div>
    </div>
  );
}
