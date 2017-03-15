import { PROFILE_FETCH_SUCCESS, TWEET_POST_SUCCESS, FOLLOW_FETCH_STATUS_SUCCESS } from '../actions/types'

const initialState = {
  name: '',
  username: '',
  email: '',
  numFollowers: 0,
  numFollowings: 0,
  numTweets: 0,
  isFollowing: false,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        numFollowers: action.payload.numFollowers,
        numFollowings: action.payload.numFollowings,
        numTweets: action.payload.numTweets,
      }
    }
    case TWEET_POST_SUCCESS: {
      return {
        ...state,
        numTweets: state.numTweets + 1,
      }
    }
    case FOLLOW_FETCH_STATUS_SUCCESS: {
      if (action.payload.followedUsername !== state.username) {
        return state
      }

      return {
        ...state,
        isFollowing: action.payload.isFollowing,
      }
    }
    default: {
      return state
    }
  }
}

export default profileReducer
