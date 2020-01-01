import api from '../utils/api';

export const getBookAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get('book')
				.then((res) => {
					dispatch({ type: 'GET_BOOK', value: res.data })
					console.log(res.data);
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const storeBookAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('book', data)
				.then((res) => {
					dispatch({ type: 'STORE_BOOK', value: data })
					resolve(res)
					console.log('this from book store');
				}, (err) => {
					reject(err)
					console.log('this from book store');
				})
		})

	return promise; 
}

export const editBookAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get(`book/${id}/edit`)
				.then((res) => {
					dispatch({ type: 'EDIT_BOOK', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const updateBookAPI = (data, id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			data._method = "PUT"
			api.post(`book/${id}`, data)
				.then((res) => {
					dispatch({ type: 'UPDATE_BOOK', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}