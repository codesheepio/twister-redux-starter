import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import tweetsReducer from './tweets'
import authReducer from './auth'

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  auth: authReducer,
  form: formReducer,
})

export default rootReducer
