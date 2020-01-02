import { combineReducers } from 'redux'; 
import auth from './auth';
import book from './book';
import user from './user';

export default combineReducers({
	auth: auth,
	book: book,
	user: user,
});