import { connect } from 'react-redux'
import TweetList from '../components/TweetList'

const mapStateToProps = (state) => ({
  tweets: state.tweets,
})

export default connect(mapStateToProps)(TweetList)
