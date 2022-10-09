import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <h2>{user.name} {user.surname}</h2>
            <p>{user.email}</p>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Show user</button>
            <button onClick={() => dispatch(userActions.deleteUser(user.id))}>Delete</button>
        </div>
    );
};

export {User};