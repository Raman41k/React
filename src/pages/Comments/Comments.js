import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {ADD_POSTS} from "../../reducers";

const Comments = () => {

    const state = useSelector(value => value.commentsReducer);

    const dispatch = useDispatch();

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((data) => dispatch({type: ADD_POSTS, payload: data}));

    return (
        <div>
            <h2>Comments</h2>
            {
                JSON.stringify(state)
            }
        </div>
    );
};

export {Comments};