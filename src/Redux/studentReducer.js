import { ADD_STUDENT_ERROR, ADD_STUDENT_LOADING, ADD_STUDENT_SUCCESS, GET_STUDENT_ERROR, GET_STUDENT_LOADING, GET_STUDENT_SUCCESS } from "./actionsTypes"

export const studentInitState = {
    students: {
        loading: false,
        data: [],
        error: false
    }
}

export const studentReducer = (state = studentInitState, action) => {

    switch (action.type) {

        // add students
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
                    students: []
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

        // get students
        case GET_STUDENT_LOADING:
            return {
                ...state,
                students: {
                    ...state.students,
                    loading: true
                }
            }

        case GET_STUDENT_SUCCESS:
            return {
                ...state,
                students: {
                    loading: false,
                    data: action.payload
                }
            }

        case GET_STUDENT_ERROR:
            return {
                ...state,
                students: {
                    loading: false,
                    error: action.payload
                }
            }
        default:
            return state
    }
}