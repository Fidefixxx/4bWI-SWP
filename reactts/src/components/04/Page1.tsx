import React from "react";
import { Link, useLocation } from "react-router";
type Props = {};

export default function Page1({}: Props) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Zu Page 2
      <Link state="daten" to="/page2">
        Dashboard
      </Link>
      ;
    </div>
  );
}
