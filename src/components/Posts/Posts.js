import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../Post/Post";
import {postActions} from "../../redux";

const Posts = () => {

    const {posts} = useSelector(state => state.postReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getAll())
    }, []);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};