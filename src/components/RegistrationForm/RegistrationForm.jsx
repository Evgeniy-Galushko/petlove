import { ErrorMessage, Field, Formik, Form, connect } from "formik";
import s from "./RegistrationForm.module.css";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useId, useState } from "react";
import DisplayPassword from "../DisplayPassword/DisplayPassword.jsx";
import clsx from "clsx";
import sprite from "../../img/icon/icon-sprite.svg";
import DisplayPasswordSecond from "../DisplayPasswordSecond/DisplayPasswordSecond.jsx";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const [errorsEmailRed, setErrorsEmailRed] = useState(false);
  const [errorsEmailGreen, setErrorsEmailGreen] = useState(false);

  const [errPasswordRed, setErrPasswordRed] = useState(false);
  const [errPasswordGreen, setErrPasswordGreen] = useState(false);

  const [errPasswordRedSecond, setErrPasswordRedSecond] = useState(false);
  const [errPasswordGreenSecond, setErrPasswordGreenSecond] = useState(false);

  const [displayPasswordFirst, setDisplayPasswordFirst] = useState(false);
  const [displayPasswordSecond, setDisplayPasswordSecond] = useState(false);
  const passwordId = useId();
  const passwordIdSecond = useId();

  const format = {
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    password:
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{7,}/,
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
    if (values.password !== values.passwordSecond) {
      toast.error("Passwords do not match!");
      return;
    }

    console.log(values);

    setErrorsEmailRed(false);
    setErrorsEmailGreen(false);
    setErrPasswordGreen(false);
    setErrPasswordRed(false);
    setErrPasswordRedSecond(false);
    setErrPasswordGreenSecond(false);
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordSecond: "",
  };

  const handleErro = (name, value) => {
    console.log(name);
    // console.log(value);
    if (name === "email") {
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

    if (name === "password") {
      // console.log(value.length);
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

    if (name === "passwordSecond") {
      if (format.password.test(value) && value.length >= 7) {
        console.log("green");
        setErrPasswordRedSecond(false);
        setErrPasswordGreenSecond(true);
      }
      if (!format.password.test(value) && value.length < 7) {
        console.log("red");
        setErrPasswordGreenSecond(false);
        setErrPasswordRedSecond(true);
      }
    }

    // if () {

    // }
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
                  displayPassword={displayPasswordFirst}
                  setDisplayPassword={setDisplayPasswordFirst}
                />
              </label>
              <Field
                id={passwordId}
                name="password"
                type={displayPasswordFirst ? "text" : "password"}
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
              <label htmlFor={passwordIdSecond} className={s.labelPassword}>
                <DisplayPasswordSecond
                  displayPassword={displayPasswordSecond}
                  setDisplayPassword={setDisplayPasswordSecond}
                />
              </label>
              <Field
                id={passwordIdSecond}
                name="passwordSecond"
                type={displayPasswordSecond ? "text" : "password"}
                placeholder="Confirm password"
                required
                className={clsx(
                  s.input,
                  errPasswordRedSecond && s.errBorderRed,
                  errPasswordGreenSecond && s.errBorderGreen
                )}
                onBlur={(e) => {
                  // console.log();
                  handleErro(e.target.name, e.target.value);
                }}
              />
              <ErrorMessage
                name="passwordSecond"
                component="span"
                className={s.errorPassword}
              />
              {errPasswordRedSecond && (
                <svg className={s.iconPassword}>
                  <use href={`${sprite}#icon-cross-red`} />
                </svg>
              )}
              {errPasswordGreenSecond && (
                <svg className={s.iconPassword}>
                  <use href={`${sprite}#icon-check-mark-green`} />
                </svg>
              )}
            </div>
            <button type="submit" className={s.buttonSubmit}>
              Registration
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
