import React, {useState} from 'react';

import "./User.css"

const User = (props) => {

    let {user} = props;

    let [show,setShow] = useState(false);

    return (

        <div className={"userContainer"}>
            <h1>{user.id}.{user.name}</h1>
            {
                show ?
                    <div>
                        <ul>
                            <li>Username: {user.username}</li>
                            <li>Email: {user.email}</li>
                            <li>Phone: {user.phone}</li>
                            <li>Website: {user.website}</li>
                        </ul>
                    </div>
                    :null
            }
            <button onClick={ () => setShow(!show)}>More info</button>
        </div>

    );
};

export default User;