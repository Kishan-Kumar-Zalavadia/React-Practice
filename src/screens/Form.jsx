import React from 'react'

export default function Form() {
  function handleRegister(event) {
    // ! Prevent Reloading Screen
    // * Do not reload the screen when calling this function.
    event.preventDefault();

    // alert('Radhe Radhe!!');
    console.log("Radhe Radhe!!");
  }

  let age = 20;

  return (
    <div>
      {/* // ! Conditional Rendering */}
      {age >= 18 ? (
        <form>
          <input type="email" placeholder="Email" />
          <button onClick={handleRegister}>submit</button>
        </form>
      ) : (
        <p>Not for you</p>
      )}
    </div>
  );
}
