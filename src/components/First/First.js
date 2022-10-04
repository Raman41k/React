import React, {useReducer} from 'react';

import c from './style.module.css'
import {DEC_1, DEC_2, DEC_3, INC_1, INC_2, INC_3, reducer1} from "../../reducers";

const First = () => {

    const [state,dispatch] = useReducer(reducer1,{a:0,b:0,c:0});

    return (
        <div>

            <h1>First task</h1>

            <h2>A: {state.a}</h2>
            <button onClick={() =>dispatch({type: INC_1})}>+1</button>
            <button onClick={() =>dispatch({type: DEC_1})}>-1</button>
            <h2>B: {state.b}</h2>
            <button onClick={() =>dispatch({type: INC_2})}>+1</button>
            <button onClick={() =>dispatch({type: DEC_2})}>-1</button>
            <h2>C: {state.c}</h2>
            <button onClick={() =>dispatch({type: INC_3})}>+1</button>
            <button onClick={() =>dispatch({type: DEC_3})}>-1</button>
        </div>
    );
};

export {First};