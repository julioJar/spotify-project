import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../styles/App.scss';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.addListSongs('muse', 'track', 20, 0);
  }

  _generateListSongs(songs) {
    return (
      <ul>
        {songs && songs.map((item, index) => {
          return <li onClick={() => {this.props.addSong(songs[index])}} key={index}>{ item.name }</li>
        })}
      </ul>
    );
  }
  render() {
    const { songs, myLibray } = this.props;
    console.log(myLibray)
    return (
      <div  className="App">
        {this._generateListSongs(songs)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.songsContainer.isLoading,
  songs: state.songsContainer.songs,
  myLibray: state.myLibray
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
