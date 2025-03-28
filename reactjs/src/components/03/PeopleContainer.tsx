import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

const colorMap: Record<number, string> = {
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

interface Person {
  id: number;
  name: string;
  job: string;
  picture: string;
}

type Props = {};

export default function PeopleContainer({}: Props) {
  const [people, setPeople] = useState<Person[]>([]);
  const [filteredpeople, setFilteredPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [color, setColor] = useState<number>(0);
  const [clicked, setClicked] = useState<number>(0);

  useEffect(() => {
    fetch("https://67d4412fd2c7857431ed076b.mockapi.io/Person")
      .then((res) => res.json())
      .then((data: Person[]) => {
        const updatedData = data.map((person) => ({
          ...person,
          picture: `https://picsum.photos/id/${person.id}/200`,
        }));
        setPeople(updatedData);
        setFilteredPeople(updatedData);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setColor((prev) => (clicked === 0 ? 0 : prev < 900 ? prev + 100 : 0));
  }, [clicked]);

  if (isLoading) {
    return (
      <div className="">
        <img
          className="w-75 h-75"
          src="https://i.gifer.com/ZKZg.gif"
          alt="Loading"
        />
      </div>
    );
  }

  const filterPeople = (filter: string) => {
    const filtered = people.filter(
      (person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()) ||
        person.job.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPeople(filtered);
  };

  return (
    <div>
      <div className="flex border-b-3 border-dashed fixed top-0 p-3 bg-white w-full mt-0">
        <p className="text-4xl">People Container</p>
        <div>
          <input
            className="border-2 p-1 rounded ml-5 my-2 focus-visible:bg-gray-100 focus-visible:outline-0"
            type="text"
            placeholder="Filter: Name / Job"
            onChange={(el) => filterPeople(el.target.value)}
          />
        </div>
        <div>
          <button
            className={`p-1 rounded ml-5 my-2 border ${colorMap[color]}`}
            onClick={() => setClicked((prev) => prev + 1)}
          >
            Click to change color: {color}
          </button>
        </div>
      </div>
      <div className="pt-20 grid grid-cols-1 gap-x-5 gap-y-2 m-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredpeople.map((element) => (
          <PersonCard
            key={element.id}
            name={element.name}
            title={element.job}
            iconurl={element.picture}
          />
        ))}
      </div>
    </div>
  );
}
