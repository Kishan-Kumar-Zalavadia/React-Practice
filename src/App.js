import "./App.css";
import About from "./screens/About";
import Form from "./screens/Form";
import HooksForm from "./screens/HooksForm";
import Todo from "./screens/Todo";
import UserList from "./screens/UserList"
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducer";
import { configureStore } from "@reduxjs/toolkit";

// ! Create Store
// const store = createStore(rootReducer);
// ! OR
const store = configureStore({
  reducer: rootReducer,
});

const route = createBrowserRouter([
  {
    path: "/",
    element: <h1>JSK!</h1>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/user-list",
    element: <UserList />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* // * Provider is for redux */}
      <Provider store={store}>
        {/* <h1>Hello World!</h1> */}
        {/* <About></About> */}
        {/* <Form /> */}
        {/* <HooksForm/> */}
        {/* <UserList/> */}
        {/* <Todo/> */}
        <RouterProvider router={route} />

        {/* // ! OR */}
        {/* <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      </Provider>
    </div>
  );
}

export default App;

// This is main file
