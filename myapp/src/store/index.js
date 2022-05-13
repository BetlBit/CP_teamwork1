import { createStore, combineReducers } from 'redux'
import { countReducer } from './countReduser'

const rootReducer = combineReducers({
	countRed: countReducer
})

export const store = createStore(rootReducer)