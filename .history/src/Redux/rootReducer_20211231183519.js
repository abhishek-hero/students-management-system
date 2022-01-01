import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    students: studentReducer,
    contests: contestReducer
})