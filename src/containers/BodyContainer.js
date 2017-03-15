import { connect } from 'react-redux'
import { push as redirect } from 'connected-react-router'
import BodyContainer from '../components/BodyContainer'

const mapStateToProps = state => ({
  token: state.auth.token,
})

export default connect(mapStateToProps, { redirect })(BodyContainer)
