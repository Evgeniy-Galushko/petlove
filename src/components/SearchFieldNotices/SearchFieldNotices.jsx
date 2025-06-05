import { Field, Form, Formik } from "formik";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./SearchFieldNotices.module.css";
import clsx from "clsx";
import { useId } from "react";

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
  const popularId = useId();
  const unpopularId = useId();
  const cheapId = useId();
  const expensiveId = useId();

  const initialValues = {
    request: "",
    categories: "",
    gender: "",
    species: "",
    location: "",
  };

  const handleSubmit = (values, actions) => {
    // console.log(values);
    setRequest(values);

    // actions.resetForm();
  };

  const handlePopularyChange = (e) => {
    if (e.target.name === "popular") {
      setPopularity(e.target.value);
    }
    if (e.target.name === "unpopular") {
      setPopularity(e.target.value);
    }
    if (e.target.name === "cheap") {
      setPrice(e.target.value);
    }
    if (e.target.name === "expensive") {
      setPrice(e.target.value);
    }
    // setPopularity(e.target.value);

    // console.log(e.target.value);
    // console.log(e.target.name);
    // setPopularity();
  };

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
        <label
          htmlFor={popularId}
          className={clsx(
            s.inputPopularityPrice,
            popularity === "true" && s.inputPopularityPriceColor
          )}
        >
          Popular
          {popularity === "true" && (
            <svg className={clsx(s.icon)}>
              <use href={`${sprite}#icon-x`} />
            </svg>
          )}
        </label>
        <input
          id={popularId}
          type="radio"
          name="popular"
          value="true"
          onChange={handlePopularyChange}
          checked={popularity === "true"}
          className={s.labelRadio}
        />
        <label
          htmlFor={unpopularId}
          className={clsx(
            s.inputPopularityPrice,
            popularity === "false" && s.inputPopularityPriceColor
          )}
        >
          Unpopular{" "}
          {popularity === "false" && (
            <svg className={clsx(s.icon)}>
              <use href={`${sprite}#icon-x`} />
            </svg>
          )}
        </label>
        <input
          id={unpopularId}
          type="radio"
          name="unpopular"
          value="false"
          onChange={handlePopularyChange}
          checked={popularity === "false"}
          className={s.labelRadio}
          // className={clsx(s.inputSearch, s.inputSearchWidth)}
        />
        <label
          htmlFor={cheapId}
          className={clsx(
            s.inputPopularityPrice,
            price === "true" && s.inputPopularityPriceColor
          )}
        >
          Cheap{" "}
          {price === "true" && (
            <svg className={clsx(s.icon)}>
              <use href={`${sprite}#icon-x`} />
            </svg>
          )}
        </label>
        <input
          id={cheapId}
          type="radio"
          name="cheap"
          value="true"
          onChange={handlePopularyChange}
          checked={price === "true"}
          className={s.labelRadio}
          // className={clsx(s.inputSearch, s.inputSearchWidth)}
        />
        <label
          htmlFor={expensiveId}
          className={clsx(
            s.inputPopularityPrice,
            price === "false" && s.inputPopularityPriceColor
          )}
        >
          Expensive
          {price === "false" && (
            <svg className={clsx(s.icon)}>
              <use href={`${sprite}#icon-x`} />
            </svg>
          )}
        </label>
        <input
          id={expensiveId}
          type="radio"
          name="expensive"
          value="false"
          onChange={handlePopularyChange}
          checked={price === "false"}
          className={s.labelRadio}
          // className={clsx(s.inputSearch, s.inputSearchWidth)}
        />
      </li>
    </ul>
  );
}
