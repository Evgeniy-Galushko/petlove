import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./AddPetForm.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function AddPetForm({ species }) {
  const condition = {
    name: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    avatar: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
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
    title: "",
    imgURL: "",
    species: "",
    birthday: "",
    sex: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    // dispatch(currentEdit({ values, closeModal }));
    // if (currentUser === 200) {
    //   closeModal();
    // }

    actions.resetForm();
  };

  return (
    <>
      <h1 className={s.title}>
        Add my pet /<span className={s.spanTitle}> Personal details</span>
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={pattern}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className={s.boxRadio}>
              <Field
                name="sex"
                type="radio"
                value="female"
                id="female"
                // placeholder={currentUser.name}
                className={s.inputRadioGender}
              />
              <label
                htmlFor="female"
                className={clsx(s.labelRadioGender, s.fameli)}
              >
                <svg className={s.iconRadioGender}>
                  <use href={`${sprite}#icon-femali-white`} />
                </svg>
              </label>
              <Field
                name="sex"
                type="radio"
                value="male"
                id="male"
                // placeholder={currentUser.name}
                className={s.inputRadioGender}
              />
              <label
                htmlFor="male"
                className={clsx(s.labelRadioGender, s.male)}
              >
                <svg className={s.iconRadioGender}>
                  <use href={`${sprite}#icon-male-blue`} />
                </svg>
              </label>
              <Field
                name="sex"
                type="radio"
                value="multiple"
                id="multiple"
                // placeholder={currentUser.name}
                className={s.inputRadioGender}
              />
              <label
                htmlFor="multiple"
                className={clsx(s.labelRadioGender, s.multiple)}
              >
                <svg className={s.iconRadioGender}>
                  <use href={`${sprite}#icon-femali-male-yellow`} />
                </svg>
              </label>
            </div>
            <div className={s.iconAndImg}>
              {values.imgURL ? (
                <img
                  src={values.imgURL ? values.imgURL : null}
                  alt="foto"
                  className={s.imgPet}
                />
              ) : (
                <svg className={s.iconImg}>
                  <use href={`${sprite}#icon-icons8_cat-footprint`} />
                </svg>
              )}
            </div>
            <div className={s.boxImgUrl}>
              <input
                type="text"
                name="imgURL"
                value={values.imgURL}
                className={clsx(
                  s.inputValuesImgUrl,
                  values.imgURL.trim() !== "" && s.inputGeneralBorder
                )}
                required
                // pattern={condition.avatar}
                placeholder="Enter URL"
              />
              <input
                className={s.inputSavesImgNone}
                // name="imgURL"
                id="imgURL"
                type="file"
                accept="image/*"
                required
                onChange={(e) => {
                  const file = e.currentTarget.files[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setFieldValue("imgURL", url);
                  }
                }}
              />
              <label htmlFor="imgURL" className={s.inputSavesImg}>
                Upload photo
                <svg className={s.iconInputSavesImg}>
                  <use href={`${sprite}#icon-upload-cloud`} />
                </svg>
              </label>
              <ErrorMessage
                name="imgURL"
                component="span"
                className={s.errorMessage}
              />
            </div>
            <div className={s.boxGeneral}>
              <Field
                name="title"
                type="text"
                required
                placeholder="Title"
                className={clsx(
                  s.inputGeneral,
                  values.title.trim() !== "" && s.inputGeneralBorder
                )}
              />
              <ErrorMessage
                name="title"
                component="span"
                className={s.errorMessage}
              />
              <Field
                name="name"
                type="text"
                required
                placeholder="Pet’s Name"
                className={clsx(
                  s.inputGeneral,
                  values.name.trim() !== "" && s.inputGeneralBorder
                )}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={s.errorMessage}
              />
              <div className={s.boxDateGender}>
                <Field
                  name="birthday"
                  type="date"
                  required
                  // placeholder={currentUser.phone}
                  className={clsx(
                    s.dateGender,
                    values.birthday !== "" && s.inputGeneralBorder
                  )}
                />

                <ErrorMessage
                  name="birthday"
                  component="span"
                  className={s.errorMessage}
                />

                <Field
                  name="species"
                  id="species"
                  as="select"
                  required
                  // placeholder={currentUser.phone}
                  className={clsx(
                    s.dateGender,
                    values.species !== "" && s.inputGeneralBorder
                  )}
                >
                  <option>Type of pet</option>;
                  {species.map((specie) => {
                    return <option value={specie}>{specie}</option>;
                  })}
                </Field>
                <label htmlFor="species">
                  <svg className={s.iconInputSpecies}>
                    <use href={`${sprite}#icon-arrow-left`} />
                  </svg>
                </label>
                <ErrorMessage
                  name="species"
                  component="span"
                  className={s.errorMessage}
                />
              </div>
            </div>
            <div className={s.boxButton}>
              <NavLink to="/profile" className={s.linkBack}>
                Back
              </NavLink>
              <button type="submit" className={s.buttonSubmit}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
