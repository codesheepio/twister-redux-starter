import { PROFILE_FETCH_SUCCESS } from './types'
import config from '../config'

const { host, port } = config.api

const fetchProfileSuccess = ({
  username,
  name,
  email,
  numFollowers,
  numFollowings,
  numTweets,
}) => ({
  type: PROFILE_FETCH_SUCCESS,
  payload: {
    username,
    name,
    email,
    numFollowers,
    numFollowings,
    numTweets,
  },
})

const fetchProfile = username => (dispatch) => {
  console.log('username', username)
  const uri = `http://${host}:${port}/api/TwisterUsers/${username}`

  fetch(uri, { mode: 'cors' })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(profile => dispatch(fetchProfileSuccess(profile)))
  .catch(err => console.error(err))
}

export {
  fetchProfile,
}
