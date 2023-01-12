import React from "react";
import { createStore } from "redux";


const counterState = {
    total: 100,
}

const counterReducer = (state = counterState) => {
    return state
}

const store = createStore(counterReducer);

export default store