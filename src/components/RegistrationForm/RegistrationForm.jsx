import { ErrorMessage, Field, Formik, Form, connect } from "formik";
import s from "./RegistrationForm.module.css";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useId, useState } from "react";
import DisplayPassword from "../DisplayPassword/DisplayPassword.jsx";
import clsx from "clsx";
import sprite from "../../img/icon/icon-sprite.svg";

export default function RegistrationForm() {
  const [errorsEmailRed, setErrorsEmailRed] = useState(false);
  const [errorsEmailGreen, setErrorsEmailGreen] = useState(false);

  const [errPasswordRed, setErrPasswordRed] = useState(false);
  const [errPasswordGreen, setErrPasswordGreen] = useState(false);
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

    setErrorsEmailRed(false);
    setErrorsEmailGreen(false);
    setErrPasswordGreen(false);
    setErrPasswordRed(false);
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleErro = (type, value) => {
    // console.log(format.email.test(value));
    // console.log(type);
    if (type === "email") {
      if (format.email.test(value)) {
        console.log("green");
        setErrorsEmailRed(false);
        setErrorsEmailGreen(true);
      }
      if (!format.email.test(value)) {
        console.log("red");
        setErrorsEmailGreen(false);
        setErrorsEmailRed(true);
      }
    }

    if (type === "password") {
      console.log(value.length);
      if (format.password.test(value) && value.length >= 7) {
        console.log("green");
        setErrPasswordRed(false);
        setErrPasswordGreen(true);
      }
      if (!format.password.test(value) && value.length < 7) {
        console.log("red");
        setErrPasswordGreen(false);
        setErrPasswordRed(true);
      }
    }
  };

  return (
    <ul className={s.boxRegistration}>
      <li>
        <p className={s.paragraphGreeting}>
          Thank you for your interest in our platform.
        </p>
      </li>
      <li className={s.formikBox}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={s.form}>
            <div className={s.boxInput}>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                required
                className={clsx(
                  s.input
                  // errorsEmailRed && s.errBorderRed,
                  // errorsEmailGreen && s.errBorderGreen
                )}
                onBlur={(e) => {
                  handleErro(e.target.type, e.target.value);
                }}
              />
              {/* <ErrorMessage
                name="email"
                component="span"
                className={s.errorEmail}
              /> */}
              {/* {errorsEmailRed && (
                <svg className={s.iconEmail}>
                  <use href={`${sprite}#icon-cross-red`} />
                </svg>
              )}
              {errorsEmailGreen && (
                <svg className={s.iconEmail}>
                  <use href={`${sprite}#icon-check-mark-green`} />
                </svg>
              )} */}
            </div>
            <div className={s.boxInput}>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                required
                className={clsx(
                  s.input,
                  errorsEmailRed && s.errBorderRed,
                  errorsEmailGreen && s.errBorderGreen
                )}
                onBlur={(e) => {
                  handleErro(e.target.type, e.target.value);
                }}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={s.errorEmail}
              />
              {errorsEmailRed && (
                <svg className={s.iconEmail}>
                  <use href={`${sprite}#icon-cross-red`} />
                </svg>
              )}
              {errorsEmailGreen && (
                <svg className={s.iconEmail}>
                  <use href={`${sprite}#icon-check-mark-green`} />
                </svg>
              )}
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
                className={clsx(
                  s.input,
                  errPasswordRed && s.errBorderRed,
                  errPasswordGreen && s.errBorderGreen
                )}
                onBlur={(e) => {
                  handleErro(e.target.type, e.target.value);
                }}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={s.errorPassword}
              />
              {errPasswordRed && (
                <svg className={s.iconPassword}>
                  <use href={`${sprite}#icon-cross-red`} />
                </svg>
              )}
              {errPasswordGreen && (
                <svg className={s.iconPassword}>
                  <use href={`${sprite}#icon-check-mark-green`} />
                </svg>
              )}
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
                placeholder="Confirm password"
                required
                className={clsx(
                  s.input,
                  errPasswordRed && s.errBorderRed,
                  errPasswordGreen && s.errBorderGreen
                )}
                onBlur={(e) => {
                  handleErro(e.target.type, e.target.value);
                }}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={s.errorPassword}
              />
              {errPasswordRed && (
                <svg className={s.iconPassword}>
                  <use href={`${sprite}#icon-cross-red`} />
                </svg>
              )}
              {errPasswordGreen && (
                <svg className={s.iconPassword}>
                  <use href={`${sprite}#icon-check-mark-green`} />
                </svg>
              )}
            </div>
            <button type="submit" className={s.buttonSubmit}>
              Log In
            </button>
          </Form>
        </Formik>
      </li>
      <li>
        <p className={s.paragraphAccount}>
          Already have an account?
          <NavLink to="/login" className={s.navParagraphAccount}>
            Login
          </NavLink>
        </p>
      </li>
    </ul>
  );
}
