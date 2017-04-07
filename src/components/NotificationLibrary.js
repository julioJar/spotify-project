import React, { Component } from 'react';
import { Link } from 'react-router'

class NotificationLibrary extends Component {
  render() {
    return (
      <div className="NotificationContainer">
        <button className="NotificationButton">
          <Link to="/libray">My Library</Link>
          <div className={`NotificationGlobe ${this.props.notifications ? '' : 'hide'}`}>
            {this.props.notifications}
          </div>
        </button>
      </div>
    )
  }
}

export default NotificationLibrary;
