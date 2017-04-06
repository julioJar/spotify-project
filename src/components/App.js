import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../styles/App.scss';
import * as actions from '../actions';
import SearchController from './SearchController';
import ListSongController from './ListSongController';

class App extends Component {
  render() {
    const { songs, myLibray, isLoading } = this.props;

    return (
      <div className="App">
        <h1>Spotify Track Searcher</h1>
        <SearchController addListSongs={this.props.addListSongs.bind(this)} />
        { isLoading  ? <img style={{width: 50}} src={require('../public/loader.gif')} /> : <ListSongController songs={ this.props.songs } /> }
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
