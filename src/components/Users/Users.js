import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const {users, loading, error} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
    },[]);


    return (
        <div>
            {!loading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
            <hr/>
        </div>
    );
};

export {Users};