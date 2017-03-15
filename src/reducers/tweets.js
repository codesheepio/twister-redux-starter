import { FETCH_TWEETS_SUCCESS, TWEET_POST_SUCCESS } from '../actions/types'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS: {
      return action.payload.tweets
    }
    case TWEET_POST_SUCCESS: {
      const { name, username, tweetText, timestamp } = action.payload
      return [
        { name, username, tweetText, timestamp },
        ...state,
      ]
    }
    default: {
      return state
    }
  }
}

export default tweetsReducer
