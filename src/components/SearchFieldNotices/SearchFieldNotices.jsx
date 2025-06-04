import { Field, Form, Formik } from "formik";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./SearchFieldNotices.module.css";
import clsx from "clsx";

export default function SearchFieldNotices({
  setRequest,
  categories,
  gender,
  species,
  setPrice,
  price,
  setPopularity,
  popularity,
}) {
  const initialValues = {
    request: "",
    categories: "",
    gender: "",
    species: "",
    location: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    setRequest(values.request);

    // actions.resetForm();
  };

  const handlePopulary = () => {};

  return (
    <ul>
      <li>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field
              type="text"
              name="request"
              className={s.inputSearch}
              placeholder="Search"
            />
            <div className={s.categoriesGender}>
              <Field
                as="select"
                name="categories"
                className={s.inputCategoriesGender}
                // placeholder="Category"
              >
                <option>Category</option>
                {categories.map((categorie, index) => {
                  return <option key={index}>{categorie}</option>;
                })}
              </Field>
              <Field
                as="select"
                name="gender"
                className={s.inputCategoriesGender}
                // placeholder="Category"
              >
                <option>By gender</option>
                {gender.map((gen, index) => {
                  return <option key={index}>{gen}</option>;
                })}
              </Field>
            </div>
            <Field
              as="select"
              name="species"
              className={s.inputSpecies}
              // placeholder="Category"
            >
              <option>By type</option>
              {species.map((specie, index) => {
                return <option key={index}>{specie}</option>;
              })}
            </Field>

            <Field
              type="text"
              name="location"
              className={clsx(s.inputSearch, s.inputSearchWidth)}
              placeholder="Location"
            />

            <button className={s.buttonLocation} type="submit">
              <svg className={s.iconSearch}>
                <use href={`${sprite}#icon-search`} />
              </svg>
            </button>

            <button className={s.buttonSearch} type="submit">
              <svg className={s.iconSearch}>
                <use href={`${sprite}#icon-search`} />
              </svg>
            </button>
          </Form>
        </Formik>
      </li>
      <li className={s.boxPopularityPrice}>
        <button type="button" className={s.buttonPopularityPrice}>
          Popular
          <svg className={clsx(s.icon)}>
            <use href={`${sprite}#icon-x`} />
          </svg>
        </button>
        <button type="button" className={s.buttonPopularityPrice}>
          Unpopular
          <svg className={clsx(s.icon)}>
            <use href={`${sprite}#icon-x`} />
          </svg>
        </button>
        <button type="button" className={s.buttonPopularityPrice}>
          Cheap
          <svg className={clsx(s.icon)}>
            <use href={`${sprite}#icon-x`} />
          </svg>
        </button>
        <button type="button" className={s.buttonPopularityPrice}>
          Expensive
          <svg className={clsx(s.icon)}>
            <use href={`${sprite}#icon-x`} />
          </svg>
        </button>
      </li>
    </ul>
  );
}
