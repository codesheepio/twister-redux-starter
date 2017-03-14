import React, { PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import MainLayout from '../layouts/MainLayout'
import BodyContainer from './BodyContainer'
import LoginForm from '../containers/LoginForm'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={BodyContainer} />
        <Route path="/login" component={LoginForm} />
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
