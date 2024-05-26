import React, { useEffect, useState } from "react";
import "./HooksForm.css";

export default function HooksForm() {
  // ! useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(23);

  // ! useEffect
  useEffect(() => {
    console.log("Age:", age);
    // setAge(age+1)
    {
      age == 31 && alert("Wao you are 31");
    }
  }, [age]);
  // * Re-render the screen when `age` changes

  function handleRegister(event) {
    event.preventDefault();
  }
  function increaseAge(event) {
    event.preventDefault();
    setAge(age + 1);
  }
  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  // console.log("Email Change:", email);
  // console.log("Password Change:", password);

  return (
    <form action="">
      <p>Age: {age}</p>
      <button onClick={increaseAge}>+</button>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>submit</button>
    </form>
  );
}
