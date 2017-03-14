import { AUTH_LOGIN_SUCCESS } from './types'

const loginSuccess = (username, name, token) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    username,
    name,
    token,
  },
})
