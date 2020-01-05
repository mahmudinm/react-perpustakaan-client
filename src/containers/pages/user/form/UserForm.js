import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../../../../components/Formik/TextInput';
import { useHistory } from 'react-router-dom';

const UserForm = ({ user, storeUser, updateUser }) => {
	// gatau kenapa this.props.history undefined terpaksa pakai useHistory 
	let history = useHistory();

	const initialValues = {
		name: '',
		email: '',
	}

	return (
		<Formik
			initialValues={user.id ? user : initialValues}
	        enableReinitialize
			validationSchema={Yup.object({
				name: Yup.string()
					.required('Required'),
				email: Yup.string()
					.email('Must be an email')
					.required('Required')
			})}
			onSubmit={(data, actions) => {
				if(!data.id) {
					storeUser(data)
						.then((res) => {
							history.push('/user')
						}, (err) => {
							Object.keys(err.response.data.error.errors).map((key) => {
								// actions.setErrors( {['name']: 'error'})
								actions.setFieldError(key, err.response.data.error.errors[key])
							})
						});
				} else {
					// console.log(data.id);
					updateUser(data, data.id)
						.then((res) => {
							history.push('/user')
						}, (err) => {
							Object.keys(err.response.data.error.errors).map((key) => {
								// actions.setErrors( {['name']: 'error'})
								actions.setFieldError(key, err.response.data.error.errors[key])
							})
						})
				}
			}}
		>
			{formik => (
				<Form>
					<TextInput
						label="Name"
						type="text"
						name="name"
						placeholder="Enter your Name here"
					/>
					<TextInput
						label="Email"
						type="text"
						name="email"
						placeholder="Enter Email here"
					/>
					<button type="submit" className="btn btn-primary btn-block">
						{user.id ? 'UPDATE' : 'CREATE'}
					</button>					
				</Form>
			)}
		</Formik>
	)
}

export default UserForm;