import api from '../utils/api';

export const getBookAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get('book', data)
				.then((res) => {
					dispatch({ type: 'GET_BOOK', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
} 