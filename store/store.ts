import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

const rootReducer = combineReducers({
  basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
