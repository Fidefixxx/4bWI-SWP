import React from "react";
import { useState } from "react";
import "./App.css";
import PeopleContainer from "./components/03/PeopleContainer";

function App() {
  const [count, setCount] = useState<number>(0); // Typ für useState hinzugefügt

  return (
    <div className="min-h-screen m-0 p-0">
      {/* <Basics /> */}
      {/* <div className="flex">
        <AvatarCard Name="Matteo" Surname="Kleber" Age={18} Profession="Student" Description="MK on top" />
        <AvatarCard Name="Peter" Surname="Gsteu" Age={18} Profession="Student" Description="peta" />
        <AvatarCard Name="Matthias" Surname="Hagen" Age={19} Profession="Student" Description="Eishockey" />
        <AvatarCard Name="Valentin" Surname="Gächter" Age={18} Profession="Student" Description="vali <3" />
      </div> */}
      <PeopleContainer />
    </div>
  );
}

export default App;
