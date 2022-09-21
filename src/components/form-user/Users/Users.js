import React, {useEffect, useState} from 'react';

import {getUsers} from "../../../services/json.placeholder";
import User from "../User/User";

const Users = () => {

    let [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export default Users;