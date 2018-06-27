import { combineReducers } from 'redux';
import phoneBook from './phoneBookReducer';
import user from './user';

const rootReducer = combineReducers({
  phoneBook,
  user
});

export default rootReducer;