import React from "react"
import { useFormik } from "formik"
import "./App.css"
const App = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      conformpassword: '',
    }
  });
  console.log(formik.values);
  return (
    <>
      <div className="main">
        <div className="SignUp-Form">
          <h2> Sigh Up Here</h2>
          <form>
            <input type="text" placeholder="First Name.." name="Firstname" autoComplete="off" onChange={formik.handleChange} />
            <input type="text" placeholder="Last Name.." name="Lastname" autoComplete="off" onChange={formik.handleChange}/>
            <input type="text" placeholder="Email" name="email" autoComplete="off" />
            <input type="password" placeholder="password" name="password" autoComplete="off" />
            <input type="password" placeholder="Conformpassword" name="conformpassword" autoComplete="off" /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
export default App