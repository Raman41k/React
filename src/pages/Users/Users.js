import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_USERS} from "../../index";

const Users = () => {

    const state = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => dispatch({type:ADD_USERS,payload:data}));

    return (
        <div>
            <h2>Users</h2>
            {
                JSON.stringify(state)
            }
        </div>
    );
};

export {Users};