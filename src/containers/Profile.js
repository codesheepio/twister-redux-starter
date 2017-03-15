import { connect } from 'react-redux'
import { matchPath } from 'react-router'
import Profile from '../components/Profile'
import { fetchProfile } from '../actions/profile'

const mapStateToProps = (state) => {
  const match = matchPath(
    state.router.location.pathname,
    // eslint-disable-next-line comma-dangle
    { path: '/:ownerUsername' }
  )

  const ownerUsername = match
    ? match.params.ownerUsername
    : state.auth.username

  return {
    toFetchedUsername: ownerUsername,
    name: state.profile.name,
    username: state.profile.username,
    numTweets: state.profile.numTweets,
    numFollowers: state.profile.numFollowers,
    numFollowings: state.profile.numFollowings,
  }
}

export default connect(mapStateToProps, { fetchProfile })(Profile)
