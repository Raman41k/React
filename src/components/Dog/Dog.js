import React from 'react';

const Dog = ({dog,dispatch}) => {
    return (
        <div>
            <h2>{dog.name}</h2>
            <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>Delete</button>
        </div>
    );
};

export {Dog};