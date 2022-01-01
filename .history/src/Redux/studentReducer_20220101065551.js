import { ADD_STUDENT, ADD_STUDENT_LOADING, GET_STUDENT, REMOVE_STUDENT } from "./actionsTypes"

export const studentInitState = {
    students: {
        loading: false,
        data: [],
        error: false
    }
}

export const studentReducer = (state = studentInitState, action) => {

    switch (action.type) {
        case ADD_STUDENT_LOADING:
            return {
                ...state,
                students: {
                    ...state.students,
                    loading: true
                }
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