import React, { PropTypes } from 'react'
import NewTweet from './NewTweet'
import TweetList from '../containers/TweetList'

const MainPanel = ({ enableTweet }) => (
  <div className="main-panel">
    { enableTweet ? <NewTweet /> : null }
    <TweetList />
  </div>
)

MainPanel.propTypes = {
  enableTweet: PropTypes.bool,
}

MainPanel.defaultProps = {
  enableTweet: false,
}

export default MainPanel
