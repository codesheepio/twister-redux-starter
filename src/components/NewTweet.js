import React, { Component, PropTypes } from 'react'

class NewTweet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetText: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnChange(event) {
    this.setState({
      tweetText: event.target.value,
    })
  }

  handleKeyDown(event) {
    if (event.keyCode !== 13) {
      return
    }
    event.preventDefault()
    this.addTweet()
  }

  handleOnClick(event) {
    event.preventDefault()
    this.addTweet()
  }

  addTweet() {
    const { name, username, token } = this.props
    this.props.postTweet(name, username, this.state.tweetText, token)
    this.setState({
      tweetText: '',
    })
  }

  render() {
    return (
      <div className="new-tweet">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="tweet-text col-sm-10">
              <input
                type="text"
                id="tweetText"
                className="form-control"
                placeholder="What's happening"
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyDown}
                value={this.state.tweetText}
              />
            </div>
            <div className="col-sm-2">
              <input
                type="button"
                className="btn btn-default"
                value="Tweet"
                onClick={this.handleOnClick}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

NewTweet.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  token: PropTypes.string,
  postTweet: PropTypes.func.isRequired,
}

NewTweet.defaultProps = {
  token: '',
}

export default NewTweet
