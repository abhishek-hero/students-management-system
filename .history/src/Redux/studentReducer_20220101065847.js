import { ADD_STUDENT, ADD_STUDENT_ERROR, ADD_STUDENT_LOADING, ADD_STUDENT_SUCCESS, GET_STUDENT, REMOVE_STUDENT } from "./actionsTypes"

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

        case ADD_STUDENT_SUCCESS:
            return {
                ...state,
                students: {
                    loading: false,
                    students: [...state.students.data, action.payload]
                }
            }

        case ADD_STUDENT_ERROR:
            return {
                ...state,
                students: {
                    loading: false,
                    error: action.payload
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