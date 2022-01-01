import { ADD_CONTEST, REMOVE_CONTEST } from "./actions"

export const contestInitState = []

export const contestReducer = (state = contestInitState, action) => {

    switch (action.type) {
        case ADD_CONTEST:
            return [...state, action.payload]

        case REMOVE_CONTEST:
            return [...state, action.payload]
    }
}