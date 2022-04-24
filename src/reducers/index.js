import { combineReducers } from 'redux';
import subjects from './subjectsReducer';

const subjectsReducer = combineReducers({
  subjects
})

export default subjectsReducer;