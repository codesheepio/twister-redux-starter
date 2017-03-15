import { connect } from 'react-redux'
import { push as redirect } from 'connected-react-router'
import { matchPath } from 'react-router'
import BodyContainer from '../components/BodyContainer'

const mapStateToProps = (state) => {
  const match = matchPath(state.router.location.pathname, {
    path: '/:ownerUsername',
  })

  return {
    token: state.auth.token,
    enableTweet: !match,
  }
}

export default connect(mapStateToProps, { redirect })(BodyContainer)
