import React from "react";
import { useFormik } from "formik";
import "./App.css";
const validate  = values=>{
  const errors ={};
  if(!values.firstname){
      errors.firstname="*Requried";
  } else if(values.firstname.length > 8){
    errors.firstname="*Must 10 characters or less  ";
  }
if(!values.lastname){
  errors.lastname="*Requried";
} else if(values.lastname.length > 8){
errors.lastname="*Must 8 characters or less  ";
}
if(!values.email){
  errors.email="*Required ";
} else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
errors.email="*Invalid Email Address";
}
if(!values.password){
  errors.password="*Requried";
  } else if(values.password.length >9  ){
    errors.password="*Maximum 8 characters";
   }else if (values.password.length < 4){
    errors.password="*Minimum 8 characters";
  }
  if(!values.conformpassword){
    errors.conformpassword="*Required";
  } else if(values.password!==values.conformpassword){
    errors.conformpassword="*Password must match";
  }
  return errors;
}
const App = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      conformpassword: "",
    },
    validate,
    onSubmit : values =>{
      alert(`Hello ! ,${values.firstname} you succesfully signed up`)
    }
  });
  console.log(formik.values);
  return (
    <>
      <div className="main">
        <div className="SignUp-Form">
          <h2> Sigh Up Here</h2>
          <form onSubmit = {formik.handleSubmit}>
            < input
              type="text"
              placeholder="First Name..."
              name="firstname"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
            />
            <p>{
               formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span>:null
               }</p>
            <input
              type="text"
              placeholder="Last Name..."
              name="lastname"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
            />
             <p>
             {
               formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span>:null
            }
             </p>
            <input
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <p> {
              formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>:null
            }</p>
            <input
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <p>  {
              formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span>:null
            }</p>
            <input
              type="password"
              placeholder="Conformpassword"
              name="conformpassword"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.conformpassword}
              onBlur={formik.handleBlur}
            />
           <p>
           {
              formik.touched.conformpassword && formik.errors.conformpassword ? <span>{formik.errors.conformpassword}</span>:null
            }
           </p>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};
export default App;
