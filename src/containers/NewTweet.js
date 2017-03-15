import { connect } from 'react-redux'
import NewTweet from '../components/NewTweet'
import { postTweet } from '../actions/tweet'

const mapStateToProps = state => ({
  name: state.auth.name,
  username: state.auth.username,
  token: state.auth.token,
})

export default connect(mapStateToProps, { postTweet })(NewTweet)
