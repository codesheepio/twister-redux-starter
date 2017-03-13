import { FETCH_TWEETS_SUCCESS } from '../actions/types'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS: {
      return action.payload.tweets
    }
    default: {
      return state
    }
  }
}

export default tweetsReducer
