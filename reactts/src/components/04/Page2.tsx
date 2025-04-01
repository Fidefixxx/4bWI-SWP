import React from "react";
import { Link, useLocation } from "react-router";
type Props = {};

export default function Page2({}: Props) {
  const location = useLocation();
  console.log(location);
  var data = "";
  return (
    <div>
      <input type="text" onChange={(el) => (data = el.toString())}></input>
      <div className="bg-blue-400 w-min p-3">
        Zu Page 1
        <Link state={`${data}`} to="/page1">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
