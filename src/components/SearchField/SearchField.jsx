import { Field, Form, Formik } from "formik";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./SearchField.module.css";

export default function SearchField() {
  const initialValues = {
    search: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);

    // actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <Field
          type="text"
          name="text"
          className={s.inputSearch}
          placeholder="Search"
        />
        <button className={s.buttonSearch}>
          <svg className={s.iconSearch}>
            <use href={`${sprite}#icon-search`} />
          </svg>
        </button>
      </Form>
    </Formik>
  );
}
