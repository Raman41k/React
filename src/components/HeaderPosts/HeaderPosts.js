import React from 'react';
import {useSelector} from "react-redux";

const HeaderPosts = () => {

    const {currentPost} = useSelector(state=>state.postReducer)

    return (
        <div>
            {
                currentPost && JSON.stringify(currentPost)
            }
            <hr/>
        </div>
    );
};

export {HeaderPosts};