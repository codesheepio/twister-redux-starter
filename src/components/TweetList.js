import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  componentDidMount() {
    const username = 'kaizerwing'

    this.props.fetchTweets(username)
  }
  render() {
    return (
      <div className="tweet-list">
        {this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
  fetchTweets: PropTypes.func.isRequired,
}

TweetList.defaultProps = {
  tweets: [],
}

export default TweetList
