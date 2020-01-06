import { combineReducers } from 'redux'; 
import auth from './auth';
import book from './book';
import user from './user';
import peminjaman from './peminjaman';
import toast from './toast';

export default combineReducers({
	auth: auth,
	book: book,
	user: user,
	peminjaman: peminjaman,
	toast: toast,
});