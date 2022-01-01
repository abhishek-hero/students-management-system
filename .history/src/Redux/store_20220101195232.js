import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './rootReducer'


const middleware = (store) => (next) => (action) => {

    if (typeOf action === 'function') {
        action(store.dispatch)
    }
    next(action)
}

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(middleware)
    )
)