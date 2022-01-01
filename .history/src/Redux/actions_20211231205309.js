import { ADD_CONTEST, ADD_STUDENT, REMOVE_CONTEST, REMOVE_STUDENT } from "./actionsTypes"

export const addStudent = (student) => ({
    type: ADD_STUDENT,
    payload: student
})

export const removeStudent = (student) => ({
    type: REMOVE_STUDENT,
    payload: student
})

export const addContest = (contest) => ({
    type: ADD_CONTEST,
    payload: contest
})

export const removeContest = (contest) => ({
    type: REMOVE_CONTEST,
    payload: contest
})