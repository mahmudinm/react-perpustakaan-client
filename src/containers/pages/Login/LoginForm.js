import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../../../components/Formik/TextInput';

const LoginForm = ({ login }) => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: ''			
			}}
			validationSchema={Yup.object({
				email: Yup.string()
					.email('Invalida email address')
					.required('Required'),
				password: Yup.string()
					.required('Required')
			})}
			onSubmit={(data, actions) => {
				console.log(data)
				login(data)
					.then(() => {
						// redirect to dashboard admin
					})
					.catch((err) => {
						actions.setFieldError("general", "Email atau Password Salah")
					})
					.finally(() => {
						actions.setSubmitting(false)
					})
			}}
		>
			{formik => (
				<Form>
					<TextInput 
						label="Email"
						type="email"
						name="email"
						placeholder="Enter your email here"
					/>
					<TextInput 
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password here"
					/>
					{!!formik.status && <div>{formik.status}</div>}
					{formik.errors.general ? <div className="alert alert-danger">{formik.errors.general}</div> : null}
					<button type="submit" className="btn btn-primary btn-block">LOGIN</button>
				</Form>					
			)}
		</Formik>
	)
}

export default LoginForm;