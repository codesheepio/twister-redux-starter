import { connect } from 'react-redux'
import TweetList from '../components/TweetList'
import { fetchTweetsSuccess } from '../actions/tweet'

const mapStateToProps = state => ({
  tweets: state.tweets,
})

const mapDispatchToProps = dispatch => ({
  fetchTweetsSuccess: tweets => dispatch(fetchTweetsSuccess(tweets)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
