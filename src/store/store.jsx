import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

// ! Create Store
// const store = createStore(rootReducer);
// ! OR
const store = configureStore({
  reducer: rootReducer,
});

export default store;