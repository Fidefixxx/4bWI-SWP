import React, { useState } from "react";
import { Link, useLocation } from "react-router";
type Props = {};

export default function Page2({}: Props) {
  const location = useLocation();
  const [input, setInput] = useState("");
  console.log(location);
  return (
    <div>
      <input
        className="border"
        type="text"
        onChange={(el) => setInput(el.target.value)}
      ></input>
      <Link className="bg-blue-300 p-3 mt-5 border" state={input} to="/page1">
        Zu Page 1
      </Link>
    </div>
  );
}
