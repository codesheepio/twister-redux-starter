import { FETCH_TWEETS_SUCCESS } from './types'

const fetchTweetsSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: { tweets },
})

export {
  fetchTweetsSuccess,
}
