import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {

    const dispatch = useDispatch();
    return (
        <div>
            <h2>{post.id} - {post.title}</h2>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>Show</button>
            <button onClick={() => dispatch(postActions.deletePost(post.id))}>Delete</button>
        </div>
    );
};

export {Post};