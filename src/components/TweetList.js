import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  componentDidMount() {
    const username = this.props.ownerUsername || 'kaizerwing'

    this.props.fetchTweets(username)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ownerUsername !== nextProps.ownerUsername) {
      const username = nextProps.ownerUsername || 'kaizerwing'

      this.props.fetchTweets(username)
    }
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
  ownerUsername: PropTypes.string,
  fetchTweets: PropTypes.func.isRequired,
}

TweetList.defaultProps = {
  tweets: [],
  ownerUsername: '',
}

export default TweetList
