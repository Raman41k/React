import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.slice/user.slice";
import {postReducer} from "./slices/post.slice/post.slice";

const rootReducer = combineReducers({
    userReducer,
    postReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}