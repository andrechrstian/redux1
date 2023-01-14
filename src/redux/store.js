import React from "react";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer";
import { counterReducer } from "./Reducer/counterReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store