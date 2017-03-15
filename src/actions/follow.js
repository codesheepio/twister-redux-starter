import { FOLLOW_FETCH_STATUS_SUCCESS } from './types'
import config from '../config'

const { host, port } = config.api

const fetchFollowStatusSuccess = (followedUsername, isFollowing) => ({
  type: FOLLOW_FETCH_STATUS_SUCCESS,
  payload: {
    followedUsername,
    isFollowing,
  },
})

const fetchFollowStatus = (loggingInUsername, followedUsername) => (dispatch) => {
  const filter = `where={"username":"${loggingInUsername}","followedUsername":"${followedUsername}", "isFollowing": true}`
  const uri = `http://${host}:${port}/api/Follows/count?${filter}`

  fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then((data) => {
    if (data.count === 0) {
      dispatch(fetchFollowStatusSuccess(followedUsername, false))
    } else {
      dispatch(fetchFollowStatusSuccess(followedUsername, true))
    }
  })
  .catch(err => console.error(err))
}

export {
  fetchFollowStatus,
}
