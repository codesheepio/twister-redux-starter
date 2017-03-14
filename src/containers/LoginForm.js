import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  const submitLogin = (values) => {
    props.login(values.username, values.password)
  }

  return (
    <div className="login-form">
      <form onSubmit={props.handleSubmit(submitLogin)}>
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

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'login',
})(LoginForm)
