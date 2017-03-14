import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { push as redirect } from 'connected-react-router'
import { login } from '../actions/auth'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.submitLogin = this.submitLogin.bind(this)
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.redirect('/')
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.token) {
      this.props.redirect('/')
    }
  }

  submitLogin(values) {
    this.props.login(values.username, values.password)
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.props.handleSubmit(this.submitLogin)}>
          <div className="login-label">
            Log in with your username
          </div>
          <div className="form-group">
            <Field
              name="username"
              component="input"
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group text-right">
            <button className="btn btn-default">Log in</button>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  token: PropTypes.string,
}

LoginForm.defaultProps = {
  token: '',
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

const mapStateToProps = state => ({
  token: state.auth.token,
})

export default connect(mapStateToProps, { login, redirect })(LoginReduxForm)
