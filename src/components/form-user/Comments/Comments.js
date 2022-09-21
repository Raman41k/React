import React, {useEffect, useState} from 'react';

import {getComments} from "../../../services/json.placeholder";
import Comment from "../Comment/Comment";

const Comments = () => {

    const [comments,setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value.data))
    }, [])

    return (
        <div>
            {
                comments.slice(0,10).map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export default Comments;