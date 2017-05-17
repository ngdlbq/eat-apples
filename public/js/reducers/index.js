import { combineReducers } from 'redux'
import appleBasketReducer from './appleBasketReducer'
import animalReaducer from './animalReaducer'

export default combineReducers({
	appleBasketReducer,
	animalReaducer
})