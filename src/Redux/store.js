import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'


const middleware = (store) => (next) => (action) => {

    if (typeof action === "function") {
        action(store.dispatch)
    } else {
        next(action)
    }
}

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)