import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";

export const ADD_USERS = 'addUsers';
export const ADD_COMMENTS = 'addComments';
export const ADD_POSTS = 'addPosts';

const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {...state, users: action.payload}
        default:
            return state;
    }
}

const commentsReducer = (state = {comments: []}, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return {...state, comments: action.payload}
        default:
            return state
    }
}

const postsReducer = (state = {posts: []}, action) => {
    switch (action.type){
        case ADD_POSTS:
            return {...state,posts: action.payload}
        default:
            return state
    }
}

const reducer = combineReducers({
    usersReducer,
    commentsReducer,
    postsReducer
})

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
