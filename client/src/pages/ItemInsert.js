import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./ItemInsert.css";

const ItemInsert = () => {
	const history = useHistory();

	async function bookSubmitHandler(values, { setSubmitting, resetForm }) {
		setSubmitting(true);
		try {
			const headers = {
				"Content-Type": "application/json",
			};
			const response = await axios.post(
				"http://localhost:3000/api/book",
				{
					title: values.title,
					author: values.author,
					publication_year: values.publicationYear,
					copies: values.copies,
					isbn: values.isbn,
				},
				headers
			);
			console.log(response);
			setSubmitting(false);
			history.push("/items");
		} catch (error) {
			setSubmitting(false);
			console.log("error creating book");
		}
	}

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("Username is required"),
		author: Yup.string().required("Author is required"),
	});

	return (
		<React.Fragment>
			<h2>Add Books</h2>
			<Formik
				initialValues={{ title: "", author: "", publicationYear: "", copies: "", isbn: "", isSubmitting: true }}
				validationSchema={validationSchema}
				onSubmit={bookSubmitHandler}
			>
				{/* Attirbutes from Formick API */}
				{({
					values,
					errors,
					touched,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleReset,
					handleSubmit,
				}) => (
					<Form
						className="post-form"
						noValidate
					>
						<div className="insert-form">
							{/* title */}
							<div className="form-group">
								<label htmlFor="title">Book Title:</label>
								<Field
									type="text"
									name="title"
									className={`form-control ${touched.title && errors.title ? "is-invalid" : ""}`}
								/>
								{/* <ErrorMessage component="div" name="title" className="danger" /> */}
							</div>
							{/* author */}
							<div className="form-group">
								<label htmlFor="author">Author: </label>
								<Field
									// component="textarea"
									type="text"
									name="author"
									className={`form-control ${touched.author && errors.author ? "is-invalid" : ""
										}`}
								/>
								{/* <ErrorMessage component="div" name="description" className="red-text" /> */}
							</div>
							{/* publication year */}
							<div className="form-group">
								<label htmlFor="publciationYear">Year of Publication:</label>
								<Field
									type="text"
									name="publicationYear"
									className={`form-control ${touched.publciationYear && errors.publciationYear ? "is-invalid" : ""
										}`}
								/>
								{/* <ErrorMessage component="div" name="publicationYear" className="red-text" /> */}
							</div>
							{/* copies */}
							<div className="form-group">
								<label htmlFor="copies">Copies: </label>
								<Field
									type="text"
									name="copies"
									className={`form-control ${touched.copies && errors.copies ? "is-invalid" : ""
										}`}
								/>
								{/* <ErrorMessage component="div" name="copies" className="red-text" /> */}
							</div>
							{/* isbn */}
							<div className="form-group">
								<label htmlFor="isbn">ISBN: </label>
								<Field
									type="text"
									name="isbn"
									className={`form-control ${touched.isbn && errors.isbn ? "is-invalid" : ""
										}`}
								/>
								{/* <ErrorMessage component="div" name="isbn" className="red-text" /> */}
							</div>
							<Button type="submit" disabled={isSubmitting}>
								Submit
						</Button>
						</div>

					</Form>
				)}
			</Formik>
		</React.Fragment>
	);
};

export default ItemInsert;

