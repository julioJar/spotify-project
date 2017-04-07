require('es6-promise').polyfill();
require('isomorphic-fetch');
import { RECEIVE_LIST, REQUEST_LIST, ADD_SONG, REMOVE_SONG, UPDATE_NOTIFICATIONS, VOTE_UP, VOTE_DOWN, ORDER_BY_VOTES } from './actionTypes';


function fetchSongList (query, type, limit, pagination) {
	return fetch(`https://api.spotify.com/v1/search?q=${query}&offset=${pagination * limit}&type=${type}&market=US&limit=${limit}`);
}

const receiveList = (songList) => {
	return {
		type: RECEIVE_LIST,
		songList
	}
}

const requestList = () => {
	return {
		type: REQUEST_LIST
	}
}

export const addSong = (song) => {
	return {
		type: ADD_SONG,
		song
	}
}

export const removeSong = (songId) => {
	return {
		type: REMOVE_SONG,
		songId
	}
}

export const updateNotifications = () => {
	return {
		type: UPDATE_NOTIFICATIONS
	}
}

export const voteUp = (songId) => {
	return {
		type: VOTE_UP,
		songId
	}
}

export const voteDown = (songId) => {
	return {
		type: VOTE_DOWN,
		songId
	}
}

export const orderByVotes = () => {
	return {
		type: ORDER_BY_VOTES
	}
}

export const addListSongs = (query, type, limit, pagination) => (dispatch) =>  {
	dispatch(requestList());
  fetchSongList(query, type, limit, pagination).then((response) => {
    return response.json();

	}).then((data) => {
		if (data.tracks) {
			dispatch(receiveList(data.tracks.items));
		} else if (data.artists) {
			dispatch(receiveList(data.artist.items));
		}
	});
}
