import { combineReducers } from 'redux'
import tweetsReducer from './tweets'
import authReducer from './auth'

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  auth: authReducer,
})

export default rootReducer
