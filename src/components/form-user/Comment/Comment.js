import React from 'react';

const Comment = ({comment}) => {



    return (
        <div>
            <h2>{comment.name}</h2>
            <h3>{comment.email}</h3>
            <p style={{color:"white"}}>{comment.body}</p>
        </div>
    );
};

export default Comment;