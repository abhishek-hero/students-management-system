import { combineReducers } from "redux"
import { studentReducer } from './studentReducer'
import { contestReducer } from './contestReducer'

export const rootReducer = combineReducers({
    students: studentReducer,
    contests: contestReducer
})