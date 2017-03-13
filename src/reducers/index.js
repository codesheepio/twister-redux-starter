import { combineReducers } from 'redux'
import tweetsReducer from './tweets'

const rootReducer = combineReducers({
  tweets: tweetsReducer,
})

export default rootReducer
