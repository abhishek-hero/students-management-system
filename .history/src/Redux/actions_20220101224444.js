import { ADD_CONTEST, ADD_STUDENT_LOADING, ADD_STUDENT_SUCCESS, GET_STUDENT_ERROR, GET_STUDENT_LOADING, GET_STUDENT_SUCCESS, REMOVE_CONTEST, REMOVE_STUDENT } from "./actionsTypes"
import axios from 'axios'


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

// get students

export const getStudentLoading = () => ({
    type: GET_STUDENT_LOADING
})

export const getStudentSuccess = (students) => ({
    type: GET_STUDENT_SUCCESS,
    payload: students
})

export const getStudentsError = (err) => ({
    type: GET_STUDENT_ERROR,
    payload: err
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


// ==================================


// get students
export const getData = () => async (dispatch) => {
    dispatch(getStudentLoading());

    try {
        const { data } = await axios.get("/smu-users");
        dispatch(getStudentSuccess(data));
    } catch (err) {
        dispatch(getStudentsError(err));
    }
}

//  Remove student

export const removeStudent = () => async (dispatch) => {

    try {

        await axios.delete(`/smu-users${id}`)

    } catch (err) {
        console.log('err', err)
    }
}