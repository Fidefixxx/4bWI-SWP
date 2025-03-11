import React from "react";
import PersonCard from "./PersonCard";

export default function PeopleContainer() {
  return (
    <div>
      <div>PeopleContainer</div>
      <div>
        <PersonCard name="Matteo" title="CEO" iconurl="https://picsum.photos/200"/>
      </div>
    </div>
  );
}
