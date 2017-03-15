import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import NavBar from '../components/NavBar'

const mapStateToProps = state => ({
  token: state.auth.token,
})

export default connect(mapStateToProps, { logout })(NavBar)
