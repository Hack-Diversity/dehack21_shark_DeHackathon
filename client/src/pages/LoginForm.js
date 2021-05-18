import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';
import './LoginForm.css';

function LoginForm(props) {
  const history = useHistory();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  function handleSubmit(values) {
    console.log(values.email);
    const hasStudentEmail = checkEduEmail(values.email);
    console.log(hasStudentEmail);
    if (hasStudentEmail) {
      localStorage.setItem('studentStatus', true);
    }
    redirectToHome();
  };

  const redirectToHome = () => {
    localStorage.setItem('loginStatus', true);
    history.push('/');
    window.location.reload(false);
  };

  const checkEduEmail = (string) => {
    const searchTerm = 'edu';
    const endOfString = string.length - 3;
    const indexOfEdu = string.indexOf(searchTerm);
    if (indexOfEdu === endOfString) {
      return true;
    }
    return false;
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .max(12, 'Password should be less than 12 characters')
      .required("Password is required"),
  });

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          isSubmitting: true,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
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
          <Form className="login-form" noValidate>
            <div className="insert-form"
            >
              {/* name */}
              {!isLoginMode && (
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <span className="text-danger">
                    {errors.name && touched.name && errors.name}
                  </span>
                </div>
              )}
              {/* email */}
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="text-danger">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              {/* <div className=" error text-danger">{newError}</div> */},

              {/* password */}
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  type="text"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                <span className="text-danger">
                  {errors.password && touched.password && errors.password}
                </span>
              </div>
              <Button type="submit" className='authSubmitButton'
                disabled={isSubmitting}
              >
                {isLoginMode ? "LOGIN" : "SIGNUP"}
              </Button>
              <br />
              <Button onClick={switchModeHandler}>
                SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
              </Button>
            </div>
          </Form>

        )}
      </Formik>
    </React.Fragment>
  );
}

export default withRouter(LoginForm);






// function LoginForm(props) {
//   const [state, setState] = useState({
//     email: '',
//     password: '',
//     successMessage: null,
//   });
//   const handleChange = e => {
//     const { id, value } = e.target;
//     setState(prevState => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const handleSubmitClick = e => {
//     e.preventDefault();
//     redirectToHome();
//   };

//   const redirectToHome = () => {
//     // props.updateTitle('Home')
//     localStorage.setItem('loginStatus', true);
//     window.alert('successfuly logged in');
//     props.history.push('/');
//     window.location.reload(false);
//   };

//   return (
//     <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//       <form>
//         <div className="form-group text-left">
//           <label htmlFor="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//             value={state.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group text-left">
//           <label htmlFor="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Password"
//             value={state.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-check"></div>
//         <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>
//           Submit
//         </button>
//       </form>
//       <div
//         className="alert alert-success mt-2"
//         style={{ display: state.successMessage ? 'block' : 'none' }}
//         role="alert">
//         {state.successMessage}
//       </div>
//     </div>
//   );
// }


