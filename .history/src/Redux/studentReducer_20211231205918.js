import { ADD_STUDENT, GET_STUDENT, REMOVE_STUDENT } from "./actionsTypes"

export const studentInitState = {
    students: []
}

export const studentReducer = (state = studentInitState, action) => {

    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case REMOVE_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case GET_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        default:
            return state
    }
}