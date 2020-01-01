import { combineReducers } from 'redux'; 
import auth from './auth';
import book from './book';

export default combineReducers({
	auth: auth,
	book: book,
});