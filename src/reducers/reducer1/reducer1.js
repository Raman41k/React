import {DEC_1, DEC_2, DEC_3, INC_1, INC_2, INC_3} from "../actions/actions";

const reducer1 = (state, action) => {
    switch (action.type) {
        case INC_1:
            return {...state, a: state.a + 1}
        case DEC_1:
            return {...state, a: state.a - 1}
        case INC_2:
            return {...state, b: state.b + 1}
        case DEC_2:
            return {...state, b: state.b - 1}
        case INC_3:
            return {...state, c: state.c + 1}
        case DEC_3:
            return {...state, c: state.c - 1}
        default:
            return state
    }
}

export {
    reducer1
}