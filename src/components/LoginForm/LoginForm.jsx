import { ErrorMessage, Field, Formik, Form, connect } from "formik";
import s from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useId, useState } from "react";
import DisplayPassword from "../DisplayPassword/DisplayPassword.jsx";
import clsx from "clsx";

export default function LoginForm() {
  const [errors, setErrors] = useState({});
  const [errPassword, setErrPassword] = useState(false);
  const passwordId = useId();

  const [displayPassword, setDisplayPassword] = useState(false);

  const format = {
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    password:
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(format.email, "Email is incorrect!")
      // .min(3, "Too Short!")
      // .max(50, "Too Long!")
      .required("Enter a valid Email"),
    password: Yup.string()
      .matches(format.password, "Too Short!")
      .min(7, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  // const handleErro = (targ) => {
  //   console.log(targ);
  // };

  return (
    <ul className={s.boxLogin}>
      <li>
        <p className={s.paragraphGreeting}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </li>
      <li className={s.formikBox}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className={s.boxInput}>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                required
                className={s.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={s.errorEmail}
                // onBlur={(e) => {
                //   handleErro(e.target);
                // }}
              />
            </div>
            <div className={s.boxInput}>
              <label htmlFor={passwordId} className={s.labelPassword}>
                <DisplayPassword
                  displayPassword={displayPassword}
                  setDisplayPassword={setDisplayPassword}
                />
              </label>
              <Field
                id={passwordId}
                name="password"
                type={displayPassword ? "text" : "password"}
                placeholder="Password"
                required
                className={clsx(s.input)}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={s.errorPassword}
              />
            </div>
            <button type="submit" className={s.buttonSubmit}>
              Log In
            </button>
          </Form>
        </Formik>
      </li>
      <li>
        <p className={s.paragraphAccount}>
          Don’t have an account?{" "}
          <NavLink to="/register" className={s.navParagraphAccount}>
            Register
          </NavLink>
        </p>
      </li>
    </ul>
  );
}
