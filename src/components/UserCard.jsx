import React, { useContext } from "react";
import { CountContext } from "../context/CountContext";

export default function UserCard({name}) {
  const {contextCount, setContextCount} = useContext(CountContext)
  return (
    <div>
      <h4>Count from Context: {contextCount}</h4>
      <h3>{name}</h3>
    </div>
  );
}
