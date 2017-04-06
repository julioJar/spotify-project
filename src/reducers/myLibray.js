import { ADD_SONG, REMOVE_SONG } from '../actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_SONG:
		let concatenation = [...state, action.song];
			return concatenation.filter((item, pos) => {
				return concatenation.indexOf(item) === pos
			});

		case REMOVE_SONG:
			return state.filter((song) => {
				if (song.id === action.songId) {
					return false;
				} else {
					return true;
				}
			});

		default:
			return state;
	}
}
