import { connect } from 'react-redux'
import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions/tweet'

const mapStateToProps = state => ({
  tweets: state.tweets,
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
