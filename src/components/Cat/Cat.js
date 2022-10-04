import React from 'react';

const Cat = ({cat, dispatch}) => {
    return (
        <div>
            <h2>{cat.name}</h2>
            <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete</button>
        </div>
    );
};

export {Cat};