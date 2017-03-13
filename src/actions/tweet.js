import { FETCH_TWEETS_SUCCESS } from './types'
import config from '../config'

const fetchTweetsSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: { tweets },
})

const { host, port } = config.api

const fetchTweets = username => (dispatch) => {
  const uri = `http://${host}:${port}/api/Tweets?filter={"where":{"username":"${username}"}}`

  fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(tweets => dispatch(fetchTweetsSuccess(tweets)))
  .catch(err => console.error(err))
}

export {
  fetchTweets,
}
