import {combineReducers, createStore} from 'redux';
import {booksReducer} from './booksReducer';

const rootReducer = combineReducers({
    books: booksReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store
