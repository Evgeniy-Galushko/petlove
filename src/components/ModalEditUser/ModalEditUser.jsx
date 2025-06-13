import s from "./ModalEditUser.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import Modal from "react-modal";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { currentEdit } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";

export default function ModalEditUser({ closeModal, openModal, currentUser }) {
  const dispatch = useDispatch();

  // console.log(currentUser);

  if (!currentUser) return;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(25, 26, 21, 0.3)",
    },
    content: {
      border: "none",
      overflow: "auto",
      padding: "none",
      borderRadius: "30px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const condition = {
    name: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    // avatar: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
    phone: /^\+38\d{10}$/,
  };

  const pattern = Yup.object().shape({
    name: Yup.string().matches(condition.name, "Too Short!"),
    email: Yup.string().matches(condition.email, "Too Short!"),
    avatar: Yup.string().matches(condition.avatar, "Too Short!"),
    phone: Yup.string().matches(
      condition.phone,
      "The number entered is incorrect +380661234567"
    ),
  });

  const initialValues = {
    name: "",
    email: "",
    avatar: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(currentEdit({ values, closeModal }));
    if (currentUser === 200) {
      closeModal();
    }
  };

  return (
    <Modal isOpen={openModal} onRequestClose={closeModal} style={customStyles}>
      <ul className={s.malalUserInformation}>
        <li>
          <button onClick={closeModal} className={s.buttonClose}>
            <svg className={s.icon} width={24} height={24}>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </button>
        </li>
        <li>
          <h2 className={s.title}>Edit information</h2>
        </li>
        <li className={s.boxImg}>
          {currentUser.avatar ? (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className={s.imgUser}
            />
          ) : (
            <svg className={s.iconUser}>
              <use href={`${sprite}#icon-user`} />
            </svg>
          )}
        </li>
        <li>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={pattern}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className={s.boxAvatar}>
                  <input
                    type="text"
                    value={values.avatar}
                    className={s.inputValuesAvatar}
                    pattern={condition.avatar}
                    placeholder={currentUser.avatar}
                  />
                  <input
                    className={s.inputSavesImgNone}
                    name="avatar"
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setFieldValue("avatar", url);
                      }
                    }}
                  />
                  <label htmlFor="avatar" className={s.inputSavesImg}>
                    Upload photo{" "}
                    <svg className={s.iconInputSavesImg}>
                      <use href={`${sprite}#icon-upload-cloud`} />
                    </svg>
                  </label>
                  <ErrorMessage
                    name="avatar"
                    component="span"
                    className={s.errorMessage}
                  />
                </div>
                <div className={s.boxGeneral}>
                  <Field
                    name="name"
                    type="text"
                    placeholder={currentUser.name}
                    className={s.inputGeneral}
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={s.errorMessage}
                  />
                  <Field
                    name="email"
                    type="text"
                    placeholder={currentUser.email}
                    className={s.inputGeneral}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={s.errorMessage}
                  />
                  <Field
                    name="phone"
                    type="tel"
                    placeholder={currentUser.phone}
                    className={s.inputGeneral}
                  />
                  <ErrorMessage
                    name="phone"
                    component="span"
                    className={s.errorMessage}
                  />
                </div>
                <button type="submit" className={s.buttonSubmit}>
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </li>
      </ul>
    </Modal>
  );
}
