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
      <Form>
        <Field type="text" name="text" className={s.inputSearch} />
        <button className={s.buttonSearch}>
          <svg className={s.iconSearch}>
            <use href={`${sprite}#icon-search`} />
          </svg>
        </button>
      </Form>
    </Formik>
  );
}
