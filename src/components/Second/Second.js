import React, {useReducer} from 'react';

import {ADD_10, reducer2, REMOVE_2} from "../../reducers";
const Second = () => {

    const [state,dispatch] = useReducer(reducer2, {obj:0});

    return (
        <div>

            <h1>Second task</h1>

            <h2>{state.obj}</h2>
            <button onClick={() =>dispatch({type:ADD_10, payload: 10 })}>+10</button>
            <button onClick={() =>dispatch({type:REMOVE_2, payload: 2 })}>-2</button>
        </div>
    );
};

export {Second};