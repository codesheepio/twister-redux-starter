import React from 'react'

const LoginForm = (props) => (
  <div className="login-form">
    <form>
      <div className="login-label">
        Log in with your username
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group text-right">
        <button className="btn btn-default">Log in</button>
      </div>
    </form>
  </div>
)

export default LoginForm
