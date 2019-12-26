import api from '../utils/api';

export const loginAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('auth/login', data)
				.then((res) => {
					console.log('data dari actions',res);
					dispatch({ type: 'SET_LOGIN', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
} 