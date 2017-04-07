import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import * as actions from '../actions';
import MyLibraryListItem from './MyLibrarySongItem';

class MyLibraryController extends Component {
  componentDidMount() {
    this.props.updateNotifications();
    this.props.orderByVotes();
  }

  _createLibraryList() {
    return this.props.librarySongs.map((mySong) => {
      return (
        <MyLibraryListItem
          key={mySong.id}
          mySong={mySong}
          voteUp={this.props.voteUp}
          orderByVotes={this.props.orderByVotes}
          voteDown={this.props.voteDown}
        />
      )
    })
  }

  render() {
    return (
      <div className="MyLibrayContainer">
        <h1>My Library</h1>
        <h2>Top songs</h2>
        <h3>Go to back to <Link to="/" className="serachLink">Search</Link> </h3>
        <ul className="ListContainer">
        {this._createLibraryList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  librarySongs: state.myLibray.librarySongs,
  notifications: state.myLibray.notifications
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLibraryController);
