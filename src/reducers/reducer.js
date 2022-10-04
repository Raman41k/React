
import {ADD_CAT, ADD_DOG, DELETE_CAT, DELETE_DOG} from "./actions";

function reducer(state, action) {

    switch (action.type) {
        case ADD_CAT:
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]}
        case DELETE_CAT:
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}
        case ADD_DOG:
            return {...state, dogs: [...state.dogs, {name:action.payload, id: Date.now()}]}
        case DELETE_DOG:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}
        default:
            return state
    }

}

export {
    reducer
}