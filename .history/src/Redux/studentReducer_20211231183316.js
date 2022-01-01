import { ADD_STUDENT, REMOVE_STUDENT } from "./actionsTypes"

export const studentInitState = []

export const studentReducer = (state = studentInitState, action) => {

    switch (action.type) {
        case ADD_STUDENT:
            return [...state, action.payload]
        case REMOVE_STUDENT:
            return [...state, action.payload]
        default:
            return state
    }
}