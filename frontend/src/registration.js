// import React, { useState } from "react";
// import { FaFacebook, FaGoogle, IconName } from "react-icons/fa6";
// import './login2.css'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// const Login = () => {

//   const [popupStyle, showPopup] = useState("hide")


//   const popup = () => {
//     showPopup("login-popup")
//     setTimeout(() => showPopup("hide"), 3000)

//   }
//   return (
//     <div style={{ backgroundImage: "url(OIP.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover" }}>
//       <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
//         <div className="cover">
//           <h1 style={{ color: "white" }}>Register</h1>
//           <input type="text" placeholder="username" />
//           <br></br>
//           <input type="text2" placeholder="lastname" />
//           <br></br>
//           <input type="text3" placeholder="email" />
//           <br></br>
//           <input type="password" placeholder="password" />
//           <br>
//           </br>
//           <input type="retype-password" placeholder="retype-password" />
//           <br></br>
//           <Link className="login-btn2" to="/home">Create Account</Link>


//           <div className="alt-login">


//           </div>


//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "./registration.css";
// import { Link } from 'react-router-dom';

// const Registration = () => {
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
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
//           <h1 className="text-center">Registration</h1>
//           <form onSubmit={formik.handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 className="form-control"
//                 {...formik.getFieldProps("username")}
//               />
//               {formik.touched.username && formik.errors.username && (
//                 <div className="text-danger">{formik.errors.username}</div>
//               )}
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="form-control"
//                 {...formik.getFieldProps("email")}
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <div className="text-danger">{formik.errors.email}</div>
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
//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="form-control"
//                 {...formik.getFieldProps("confirmPassword")}
//               />
//               {formik.touched.confirmPassword &&
//                 formik.errors.confirmPassword && (
//                   <div className="text-danger">
//                     {formik.errors.confirmPassword}
//                   </div>
//                 )}
//             </div>
//             <div className="text-center">
//             <Link to='/home'><button type="submit" className="btn btn-primary">
//             Register
//               </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;


// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "./registration.css";
// import { Link } from 'react-router-dom';

// const Registration = () => {
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
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
//           <h1 className="text-center">Registration</h1>
//           <form onSubmit={formik.handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 className="form-control"
//                 {...formik.getFieldProps("username")}
//               />
//               {formik.touched.username && formik.errors.username && (
//                 <div className="text-danger">{formik.errors.username}</div>
//               )}
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="form-control"
//                 {...formik.getFieldProps("email")}
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <div className="text-danger">{formik.errors.email}</div>
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
//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="form-control"
//                 {...formik.getFieldProps("confirmPassword")}
//               />
//               {formik.touched.confirmPassword &&
//                 formik.errors.confirmPassword && (
//                   <div className="text-danger">
//                     {formik.errors.confirmPassword}
//                   </div>
//                 )}
//             </div>
//             <div className="text-center">
//               <Link to='/home'>
//                 <button type="submit" className="btn btn-primary">
//                   Register
//                 </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./registration.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";

const Registration = () => {

  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  

  const {handleChange, handleSubmit, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      username:"",
      email:"",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      eventSubmit();
      action.resetForm();
    },
  });

  const eventSubmit = async (e) => {
    console.log(values);
    try{
      const response = await axios.post("http://localhost:8081/adduser", values)
      navigate("/");
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h1 className="text-center">Registration</h1>
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && errors.username && (
                <div className="text-danger">{errors.username}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                
              />
              {touched.password && errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                
              />
              {touched.confirmPassword &&
                errors.confirmPassword && (
                  <div className="text-danger">
                    {errors.confirmPassword}
                  </div>
                )}
            </div>

            <div className="text-center">
             <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

