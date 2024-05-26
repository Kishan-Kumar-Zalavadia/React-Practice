import React from "react";
import store from "../store/store";
import { incrementByAmount } from "../store/reducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Contact() {
  // ! Store the state. 
  // * "state" name can be anything
  const val = useSelector((state) => state.value);
  return (
    <div>
      <h4>{val}</h4>
      <button
        onClick={() => {
          // ! Dispatch: Send the action
          store.dispatch(incrementByAmount(5));
          console.log("State updated to " + val);
        }}
      >
        Increase count by 5
      </button>

      {/* //! To prevent from re-rendering we need to use link tag */}
      <Link to = '/todo'> Todo </Link>
    </div>
  );
}
