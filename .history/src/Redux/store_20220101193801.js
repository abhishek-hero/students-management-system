import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './rootReducer'


const middleware = (store) => (next) => (action) => {
    console.log(typeof action)
    next(action)
}

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(middleware)
    )
)