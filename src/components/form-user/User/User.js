import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h2>{user.id}.{user.name}</h2>
            <p style={{color: "white"}}>{user.email}</p>
        </div>
    );
};

export default User;