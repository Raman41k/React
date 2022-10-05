import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {ADD_COMMENTS} from "../../reducers";

const Posts = () => {

    const state = useSelector(value => value.postsReducer);

    const dispatch = useDispatch();

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((data) => dispatch({type: ADD_COMMENTS, payload: data}));

    return (
        <div>
            <h2>Posts</h2>
            {
                JSON.stringify(state)
            }
        </div>
    );
};

export {Posts};