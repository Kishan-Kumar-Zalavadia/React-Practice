import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// // ! Create Store
// // const store = createStore(rootReducer);
// // ! OR
// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

// configureStore.js

const persistConfig = {
  key: "root",
  storage, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store);

export { store, persistor };
