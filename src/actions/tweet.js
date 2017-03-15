import { FETCH_TWEETS_SUCCESS, TWEET_POST_SUCCESS } from './types'
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

const fetchHomeFeed = token => (dispatch) => {
  const uri = `http://${host}:${port}/api/Tweets/homefeed`

  fetch(uri, {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(tweets => dispatch(fetchTweetsSuccess(tweets)))
  .catch(err => console.error(err))
}

const postTweetSuccess = (name, username, tweetText, timestamp) => ({
  type: TWEET_POST_SUCCESS,
  payload: {
    name,
    username,
    tweetText,
    timestamp,
  },
})

const postTweet = (name, username, tweetText, token) => (dispatch) => {
  const uri = `http://${host}:${port}/api/Tweets`

  fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      name,
      username,
      tweetText,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(data => dispatch(
    // eslint-disable-next-line comma-dangle
    postTweetSuccess(data.name, data.username, data.tweetText, data.timestamp)
  ))
  .catch(err => console.error(err))
}

export {
  fetchTweets,
  fetchHomeFeed,
  postTweet,
}
