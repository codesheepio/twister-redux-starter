import React, { Component, PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.toFetchedUsername)
    if (!this.props.isOwnProfile) {
      this.props.fetchFollowStatus(this.props.loggingInUsername, this.props.toFetchedUsername)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.toFetchedUsername !== nextProps.toFetchedUsername) {
      this.props.fetchProfile(nextProps.toFetchedUsername)
      if (!nextProps.isOwnProfile) {
        this.props.fetchFollowStatus(nextProps.loggingInUsername, nextProps.toFetchedUsername)
      }
    }
  }

  toggleFollow() {
    this.props.toggleFollowStatus(
      this.props.loggingInUsername,
      this.props.username,
      !this.props.isFollowing,
      this.props.token,
    )
  }

  render() {
    const showProfileFollow = this.props.isOwnProfile
      ? null
      : (
        <ProfileFollow
          isFollowing={this.props.isFollowing}
          handleToggleFollow={this.toggleFollow}
        />
        )

    return (
      <div className="profile">
        <ProfileHeader name={this.props.name} username={this.props.username} />
        <ProfileDetail
          numTweets={this.props.numTweets}
          numFollowers={this.props.numFollowers}
          numFollowings={this.props.numFollowings}
        />
        {showProfileFollow}
      </div>
    )
  }
}

Profile.propTypes = {
  toFetchedUsername: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  numFollowings: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  fetchFollowStatus: PropTypes.func.isRequired,
  loggingInUsername: PropTypes.string,
  token: PropTypes.string,
  toggleFollowStatus: PropTypes.func.isRequired,
}

Profile.defaultProps = {
  loggingInUsername: '',
  token: '',
}

export default Profile
