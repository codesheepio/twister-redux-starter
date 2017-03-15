import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import tweetsReducer from './tweets'
import authReducer from './auth'
import profileReducer from './profile'

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  auth: authReducer,
  form: formReducer,
  profile: profileReducer,
})

export default rootReducer
