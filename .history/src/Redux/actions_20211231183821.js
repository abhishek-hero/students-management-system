import { ADD_STUDENT } from "./actionsTypes"

export const addStudent = (student) => ({
    type: ADD_STUDENT,
    payload: student
})