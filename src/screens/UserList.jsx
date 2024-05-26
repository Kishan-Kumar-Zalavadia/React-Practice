import React from "react";
import UserCard from "../components/UserCard";
import data from "../utils/data";

export default function userList() {
  
  return (
    <div>
      <h1>Data:</h1>
      {/* //! Data imported from Utils file */}
      {data.map(({ rollNumer,name, email }) => (
        <UserCard key={rollNumer} name={name} email={email} />
      ))}
      {/* //* OR */}
      {/* {data.map(({ name, email }) => {
        return <UserCard name={name} email={email} />;
      })} */}
    </div>
  );
}
