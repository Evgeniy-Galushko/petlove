import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./AddPetForm.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { savePhoto } from "../../utils/cloudinary.js";

export default function AddPetForm({ species, handleSubmit }) {
  const condition = {
    title: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    name: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    imgURL: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
    species: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    birthday: /^\d{4}-\d{2}-\d{2}$/,
    sex: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
  };

  const pattern = Yup.object().shape({
    title: Yup.string()
      .matches(condition.title, "Too Short!")
      .required("See short description!"),
    name: Yup.string()
      .matches(condition.name, "Too Short!")
      .required("Enter name!"),
    imgURL: Yup.string()
      .matches(condition.imgURL, "Select photo!")
      .required("Select photo!"),
    species: Yup.string()
      .matches(condition.species, "Incorrect format!")
      .required("Select animal type!"),
    birthday: Yup.string()
      .matches(condition.birthday, "Incorrect format!")
      .required("You have not selected a date!"),
    sex: Yup.string()
      .matches(condition.sex, "You have not selected gender!")
      .required("You have not selected gender!"),
  });

  const initialValues = {
    title: "",
    name: "",
    imgURL: "",
    species: "",
    birthday: "",
    sex: "",
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
            {/* {console.log(values.sex)} */}
            <ul>
              <li className={clsx(s.boxRadio, s.position)}>
                <Field
                  name="sex"
                  type="radio"
                  value="female"
                  id="female"
                  className={s.inputRadioGender}
                  required
                />
                {values.sex === "female" && (
                  <svg className={s.iconGenderFemaleOk}>
                    <use href={`${sprite}#icon-check-mark-green`} />
                  </svg>
                )}
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
                  className={s.inputRadioGender}
                  required
                />
                {values.sex === "male" && (
                  <svg className={s.iconGenderMaleOk}>
                    <use href={`${sprite}#icon-check-mark-green`} />
                  </svg>
                )}
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
                  className={s.inputRadioGender}
                  required
                />
                {values.sex === "multiple" && (
                  <svg className={s.iconGenderMultipleOk}>
                    <use href={`${sprite}#icon-check-mark-green`} />
                  </svg>
                )}
                <ErrorMessage
                  name="sex"
                  component="span"
                  className={s.errorMessage}
                />
                <label
                  htmlFor="multiple"
                  className={clsx(s.labelRadioGender, s.multiple)}
                >
                  <svg className={s.iconRadioGender}>
                    <use href={`${sprite}#icon-femali-male-yellow`} />
                  </svg>
                </label>
              </li>
              <li className={s.iconAndImg}>
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
              </li>
              <li className={clsx(s.boxImgUrl, s.position)}>
                <Field
                  type="text"
                  name="imgURL"
                  // id="imgURL"
                  value={values.imgURL}
                  className={clsx(
                    s.inputValuesImgUrl,
                    values.imgURL.trim() !== "" && s.inputGeneralBorder
                  )}
                  required
                  placeholder="Enter URL"
                />
                <input
                  className={s.inputSavesImgNone}
                  // name="imgURL"
                  id="imgURL"
                  type="file"
                  accept="image/*"
                  // required
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const formData = new FormData();
                      formData.append("file", file);
                      formData.append(
                        "upload_preset",
                        import.meta.env.VITE_CLOUDINARY_VITE_UPLOAD_PRESET
                      );
                      try {
                        const respons = await savePhoto(formData);
                        setFieldValue("imgURL", respons.url);
                      } catch (error) {
                        console.error(error);
                      }
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
                  className={clsx(s.errorMessage, s.imgError)}
                />
              </li>
              <li className={clsx(s.boxGeneral, s.position)}>
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
                  className={clsx(s.errorMessage, s.titlError)}
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
                  className={clsx(s.errorMessage, s.name)}
                />
                <ul className={s.boxDateGender}>
                  <li className={s.position}>
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
                      className={clsx(s.errorMessage, s.species)}
                    />
                  </li>
                  <li className={s.position}>
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
                      {species.map((specie, index) => {
                        return (
                          <option value={specie} key={index}>
                            {specie}
                          </option>
                        );
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
                      className={clsx(s.errorMessage, s.species)}
                    />
                  </li>
                </ul>
              </li>
            </ul>
            <div className={s.boxButton}>
              <NavLink to="/profile" className={s.linkBack}>
                Back
              </NavLink>
              <button type="submit" className={s.buttonSubmit}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
