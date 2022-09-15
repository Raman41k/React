import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/json.data";
import User from "../User/User";

const Users = () => {

    let [users,setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    },[])

    return (
        <div>
            {users.map(value => <User user={value} key={value.id} />
                )}
        </div>
    );
};

export default Users;