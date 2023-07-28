// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link } from 'react-router-dom';
// import { Button } from "@mui/material";
// import { useNavigate} from "react-router-dom";
// import {useDispatch,useSelector} from 'react-redux';


// const Login = () => {
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const navigate=useNavigate();
//     const dispatch = useDispatch();
//   const username = useSelector((state) => state.username);
//   const handlechange = (e) => {
//     dispatch({ type: "SET_USERNAME", payload: e.target.value });
//   }

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       formik.resetForm();
//     },
//   });

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-10">
//           <h1 className="text-center">Login</h1>
//           <form onSubmit={formik.handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={handlechange}
//                 className="form-control"
//                 {...formik.getFieldProps("username")}
//               />
//               {formik.touched.username && formik.errors.username && (
//                 <div className="text-danger">{formik.errors.username}</div>
//               )}
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="form-control"
//                 {...formik.getFieldProps("password")}
//               />
//               {formik.touched.password && formik.errors.password && (
//                 <div className="text-danger">{formik.errors.password}</div>
//               )}
//             </div>
//             <div className="text-center">
//             <Link to="/home">
//               <Button type="submit" className="btn btn-primary">
//                 Login
//               </Button>
//               </Link>
//               <Link to='/login'><Button>Register</Button></Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await axios.post('localhost:8080/api/v4/user/add', formData);
//       // Handle login success
//       console.log('Login successful:', response.data);
//     } catch (error) {
//       // Handle login error
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-10">
//           <h1 className="text-center">Login</h1>
//           {error && <div className="text-danger">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="form-control"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="form-control"
//               />
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>
//               <Link to='/login'>Register</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './login2.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Simulate a successful login (remove this in your actual implementation)
      dispatch({ type: "SET_USERNAME", payload: values.username });

      // Reset the form after successful login
      formik.resetForm();

      // Navigate to the home page
      navigate("/home");
    },
  });

  return (
    <div className="container">
    <cover>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h1 className="text-center">Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                // value={username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
              />
              {formik.touched.username && formik.errors.username && (
                <div className="text-danger">{formik.errors.username}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div className="text-center">
              <Button type="submit" className="btn btn-primary" disabled={!formik.isValid || formik.isSubmitting}>
                Login
              </Button>
             
             <Link to='/login' ><Button>Register</Button></Link>
              
            </div>
          </form>
        </div>
      </div>
      </cover>
    </div>
  );
};

export default Login;