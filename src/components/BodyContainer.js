import React, { Component, PropTypes } from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

class BodyContainer extends Component {
  componentWillMount() {
    if (!this.props.token) {
      this.props.redirect('/login')
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.token) {
      nextProps.redirect('/login')
    }
  }

  render() {
    return (
      <div className="container body">
        <LeftPanel />
        <MainPanel enableTweet={this.props.enableTweet} />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  enableTweet: PropTypes.bool,
  token: PropTypes.string,
  redirect: PropTypes.func.isRequired,
}

BodyContainer.defaultProps = {
  enableTweet: false,
  token: '',
}

export default BodyContainer
