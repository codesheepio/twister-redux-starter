import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.submitSignup = this.submitSignup.bind(this)
  }

  submitSignup(values) {
    this.props.signup(values.username, values.name, values.email, values.password)
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.props.handleSubmit(this.submitSignup)}>
          <div className="logo text-center">
            Sign up
          </div>
          <div className="form-group">
            <Field
              name="username"
              component="input"
              type="text"
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <Field
              name="name"
              component="input"
              type="text"
              className="form-control"
              placeholder="Firstname Lastname"
            />
          </div>
          <div className="form-group">
            <Field
              name="email"
              component="input"
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="form-group text-right">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
}

const SignupReduxForm = reduxForm({
  form: 'signup',
})(SignupForm)

export default connect(null, { signup })(SignupReduxForm)
