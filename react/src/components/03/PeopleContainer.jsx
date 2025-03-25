import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

const colorMap = {
  0: "bg-red-0",
  100: "bg-red-100",
  200: "bg-red-200",
  300: "bg-red-300",
  400: "bg-red-400",
  500: "bg-red-500",
  600: "bg-red-600",
  700: "bg-red-700",
  800: "bg-red-800",
  900: "bg-red-900",
};

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState(0);
  const [clicked, setClicked] = useState(0);

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

  useEffect(() => {
    if (clicked == 0) {
      setColor(0);
    } else if (color < 900) {
      setColor(color + 100);
    } else {
      setColor(0);
    }
  }, [clicked]);

  if (isLoading) {
    return (
      <div>
        <img className="w-75 h-75" src="https://i.gifer.com/ZKZg.gif" alt="" />
      </div>
    );
  }

  console.log(color);
  return (
    <div>
      <div className="flex border-b-3 border-dashed">
        <p className="text-4xl">People Container</p>
        <div>
          <button
            className={`p-1 rounded ml-5 my-2 border ${colorMap[color]}`}
            onClick={() => setClicked(clicked + 1)}
          >
            click to change color: {color}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-2 m-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((element) => {
          return (
            <PersonCard
              key={element.id}
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
