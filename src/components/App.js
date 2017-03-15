import React, { PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import MainLayout from '../layouts/MainLayout'
import BodyContainer from '../containers/BodyContainer'
import LoginForm from '../containers/LoginForm'
import SignupForm from '../containers/SignupForm'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={BodyContainer} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/:ownerUsername" component={BodyContainer} />
      </Switch>
    </MainLayout>
  </ConnectedRouter>
)

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
}

export default App
