import {combineReducers} from "redux";
import {usersReducer} from "../usersReducer/usersReducers";
import {commentsReducer} from "../commentsReducers/commentsReducers";
import {postsReducer} from "../postsReducers/postsReducers";

export const reducer = combineReducers({
    usersReducer,
    commentsReducer,
    postsReducer
})