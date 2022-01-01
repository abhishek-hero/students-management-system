import { ADD_CONTEST, REMOVE_CONTEST } from "./actionsTypes"


export const contestInitState = {
    contests: []
}

export const contestReducer = (state = contestInitState, action) => {

    switch (action.type) {
        case ADD_CONTEST:
            return {
                ...state,
                contests: [...action.payload]
            }

        case REMOVE_CONTEST:
            return {
                ...state,
                contests: [...action.payload]
            }

        default:
            return state
    }
}