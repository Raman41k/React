import {ADD_10, REMOVE_2} from "../actions/actions";

const reducer2 = (state, action) => {

    switch (action.type) {
        case ADD_10:
            return {...state, obj: state.obj + action.payload}
        case REMOVE_2:
            return {...state, obj: state.obj - action.payload}
        default:
            return state
    }
}

export {
    reducer2
}