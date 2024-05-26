import { createAction, createReducer } from "@reduxjs/toolkit";

// * Actions
const incrementByAmount = createAction("counter/incrementByAmount");

// * Initial state
const initialState = { value: 0 };

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementByAmount, (state, action) => {
    state.value += action.payload;
    console.log(state.value);
  });
});

// ! Export actions also
export {incrementByAmount}
export default rootReducer;
