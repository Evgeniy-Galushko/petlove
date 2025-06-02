import { Field, Form, Formik } from "formik";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./SearchField.module.css";

export default function SearchField({ setRequest }) {
  const initialValues = {
    request: "",
  };

  const handleSubmit = (values, actions) => {
    setRequest(values.request);

    // actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <Field
          type="text"
          name="request"
          className={s.inputSearch}
          placeholder="Search"
        />
        <button className={s.buttonSearch} type="submit">
          <svg className={s.iconSearch}>
            <use href={`${sprite}#icon-search`} />
          </svg>
        </button>
      </Form>
    </Formik>
  );
}
