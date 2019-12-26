import React from 'react';
import { Formik, Form, useFormik, useField } from 'formik';
import * as Yup from 'yup';
import {TextInput} from '../../../components/Formik/TextInput';

const LoginForm = () => {
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
			onSubmit={(values, { setSubmitting }) => {
				console.log(values)
			}}
		>
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
				<button type="submit" className="btn btn-primary btn-block">LOGIN</button>
			</Form>	
		</Formik>
	)
}

export default LoginForm;