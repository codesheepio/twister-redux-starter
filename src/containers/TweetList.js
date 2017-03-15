import { connect } from 'react-redux'
import { matchPath } from 'react-router'
import TweetList from '../components/TweetList'
import { fetchTweets, fetchHomeFeed } from '../actions/tweet'

const mapStateToProps = (state) => {
  const match = matchPath(
    state.router.location.pathname,
    { path: '/:ownerUsername' } // eslint-disable-line comma-dangle
  )

  return {
    tweets: state.tweets,
    ownerUsername: match ? match.params.ownerUsername : null,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, { fetchTweets, fetchHomeFeed })(TweetList)
