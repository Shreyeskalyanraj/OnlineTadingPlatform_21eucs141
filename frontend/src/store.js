import { createStore } from "redux";
const initialState = {
  username: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import masterReducer from "./masterslice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "main-root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, masterReducer);

// export const store = configureStore({
//   reducer: {
//     master: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);