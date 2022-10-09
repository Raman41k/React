import React from 'react';
import {useSelector} from "react-redux";

const HeaderUsers = () => {

    const {currentUser} = useSelector(state => state.userReducer);

    return (
        <div>
            {
                currentUser && JSON.stringify(currentUser)
            }
            <hr/>
        </div>
    );
};

export {HeaderUsers};