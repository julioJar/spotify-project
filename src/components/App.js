import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../styles/App.scss';
import * as actions from '../actions';
import SearchController from './SearchController';

class App extends Component {
  _generateListSongs(songs) {
    return (
      <ul>
        {songs && songs.map((song, index) => {
          console.log(song);
          return (
            <li onClick={() => {this.props.addSong(songs[index])}} key={index}>
              <p>{ song.name }</p>
              <div>
                <iframe
                  src={`https://embed.spotify.com/?uri=${song.uri}`}
                  width="80px"
                  height="100px"
                  frameBorder="0"
                  allowTransparency="true"
                  />
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
  render() {
    const { songs, myLibray, isLoading } = this.props;

    return (
      <div className="App">
        <SearchController addListSongs={this.props.addListSongs.bind(this)} />
        { isLoading ? <h2>Is Loading....</h2> : this._generateListSongs(songs)}
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
