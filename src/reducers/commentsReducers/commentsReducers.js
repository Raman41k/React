import {ADD_COMMENTS} from "../actions/actions";

export const commentsReducer = (state = {comments: []}, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return {...state, comments: action.payload}
        default:
            return state
    }
}