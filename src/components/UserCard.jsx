import React from "react";

export default function UserCard({name,email}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
