import React from "react";
import { Link, useLocation } from "react-router";
type Props = {};

export default function Page1({}: Props) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Link className="bg-blue-300 p-3 border" state="daten" to="/page2">
        Zu Page 2
      </Link>
      <p className="mt-5">{location.state}</p>
    </div>
  );
}
