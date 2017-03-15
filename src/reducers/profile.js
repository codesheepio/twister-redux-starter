import { PROFILE_FETCH_SUCCESS } from '../actions/types'

const initialState = {
  name: '',
  username: '',
  email: '',
  numFollowers: 0,
  numFollowings: 0,
  numTweets: 0,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS: {
      return {
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        numFollowers: action.payload.numFollowers,
        numFollowings: action.payload.numFollowings,
        numTweets: action.payload.numTweets,
      }
    }
    default: {
      return state
    }
  }
}

export default profileReducer
