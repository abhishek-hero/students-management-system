import { ADD_CONTEST, ADD_STUDENT_LOADING, ADD_STUDENT_SUCCESS, REMOVE_CONTEST, REMOVE_STUDENT } from "./actionsTypes"


// add students with managed side-effects
export const addStudentLoading = () => ({
    type: ADD_STUDENT_LOADING
})

export const addStudentSuccess = (student) => ({
    type: ADD_STUDENT_SUCCESS,
    payload: student
})

export const addStudentError = (err) => ({
    type: ADD_STUDENT_SUCCESS,
    payload: err
})


// remove students

export const removeStudent = (student) => ({
    type: REMOVE_STUDENT,
    payload: student
})


// add contests
export const addContest = (contest) => ({
    type: ADD_CONTEST,
    payload: contest
})

export const removeContest = (contest) => ({
    type: REMOVE_CONTEST,
    payload: contest
})