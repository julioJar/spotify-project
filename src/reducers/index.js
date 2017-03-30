import { combineReducers } from 'redux';
import songsContainer from './songs';
import myLibray from './myLibray';

const rootReducer = combineReducers({
  songsContainer,
  myLibray
})

export default rootReducer
