import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const Tweet = ({ name, username, tweetText }) => (
  <div className="tweet">
    <div className="name">{name}</div>
    <Link to={`/${username}`} className="screen-name">@{username}</Link>
    <div className="tweet-text">{tweetText}</div>
  </div>
)

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tweetText: PropTypes.string.isRequired,
}

export default Tweet
