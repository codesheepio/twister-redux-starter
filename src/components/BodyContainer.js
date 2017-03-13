import React, { PropTypes } from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

const BodyContainer = ({ enableTweet }) =>
  <div className="container body">
    <LeftPanel />
    <MainPanel enableTweet={enableTweet} />
  </div>

BodyContainer.propTypes = {
  enableTweet: PropTypes.bool,
}

BodyContainer.defaultProps = {
  enableTweet: false,
}

export default BodyContainer
