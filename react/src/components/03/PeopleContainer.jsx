import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://67d4412fd2c7857431ed076b.mockapi.io/Person").then((res) =>
      res.json().then((data) => {
        data.forEach((element) => {
          element.picture = `https://picsum.photos/id/${element.id}/200`;
        });
        setPeople(data);
        setIsLoading(false);
      })
    );
  }, []);

  if (isLoading) {
    return (
      <div>
        <img class="w-75 h-75" src="https://i.gifer.com/ZKZg.gif" alt="" />
      </div>
    );
  }
  return (
    <div>
      <div>
        <p class="text-4xl border-b-3 border-dashed">People Container</p>
      </div>
      <div class="grid grid-cols-1 gap-x-5 gap-y-2 m-3 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {people.map((element) => {
          return (
            <PersonCard
              name={element.name}
              title={element.job}
              iconurl={element.picture}
            />
          );
        })}
      </div>
    </div>
  );
}
