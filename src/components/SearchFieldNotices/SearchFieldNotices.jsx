import { Field, Form, Formik } from "formik";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./SearchFieldNotices.module.css";
import clsx from "clsx";
import { useId } from "react";
import Select, { components } from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  setCategory,
  setGender,
  setLocationId,
  setPopularity,
  setPrice,
  setRequest,
  setSpecie,
} from "../../redux/filters/slice.js";
import {
  selectCategory,
  selectGenders,
  selectLocationId,
  selectPopularity,
  selectPrice,
  selectRequest,
  selectSpecie,
} from "../../redux/filters/selectors.js";

export default function SearchFieldNotices({
  categories,
  genders,
  species,
  citiesLocation,
  windowWidth,
}) {
  const popularId = useId();
  const unpopularId = useId();
  const cheapId = useId();
  const expensiveId = useId();
  const categoryId = useId();
  const genderId = useId();
  const typeId = useId();
  const dispatch = useDispatch();
  const request = useSelector(selectRequest);
  const category = useSelector(selectCategory);
  const gender = useSelector(selectGenders);
  const specie = useSelector(selectSpecie);
  const locationId = useSelector(selectLocationId);
  const popularity = useSelector(selectPopularity);
  const price = useSelector(selectPrice);
  // console.log(locationId);

  const initialValues = {
    request: request || "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(setRequest(values.request));
    // console.log(values);
  };

  const handleChangeCetegory = (e) => {
    dispatch(setCategory(e.target.value));
    // setCategory(e.target.value);

    // console.log(e.target.value);
  };

  const handleChangeGender = (e) => {
    dispatch(setGender(e.target.value));
    // console.log(e.target.value);
  };

  const handleChangeSpecies = (e) => {
    dispatch(setSpecie(e.target.value));
    // console.log(e.target.value);
  };

  const handlePopularyChange = (e) => {
    if (e.target.name === "popular") {
      dispatch(setPopularity(e.target.value));
    }
    if (e.target.name === "unpopular") {
      dispatch(setPopularity(e.target.value));
    }
    if (e.target.name === "cheap") {
      dispatch(setPrice(e.target.value));
    }
    if (e.target.name === "expensive") {
      dispatch(setPrice(e.target.value));
    }
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const options = citiesLocation.map(({ cityEn, countyEn, stateEn, _id }) => {
    return { value: _id, label: `${stateEn}, ${cityEn}, ${countyEn}` };
  });

  // console.log(options);

  const CustomDropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg className={s.iconSearch}>
          <use href={`${sprite}#icon-search`} />
        </svg>
      </components.DropdownIndicator>
    );
  };

  return (
    <ul>
      <li className={s.form}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          <Form>
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
        <div className={s.categoriesGender}>
          <label htmlFor={categoryId} className={s.categoriesLabel}>
            <svg className={clsx(s.iconLabel)}>
              <use href={`${sprite}#icon-arrow-left`} />
            </svg>
          </label>
          <select
            name="categories"
            className={s.inputCategoriesGender}
            id={categoryId}
            value={category}
            onChange={handleChangeCetegory}
          >
            <option value={""}>All category</option>
            {categories.map((categorie, index) => {
              return (
                <option key={index} value={categorie}>
                  {categorie}
                </option>
              );
            })}
          </select>
          <label htmlFor={genderId} className={s.genderLabel}>
            <svg className={clsx(s.iconLabel)}>
              <use href={`${sprite}#icon-arrow-left`} />
            </svg>
          </label>
          <select
            name="gender"
            className={s.inputCategoriesGender}
            id={genderId}
            value={gender}
            onChange={handleChangeGender}
          >
            <option value={""}>All by gender</option>
            {genders.map((gen, index) => {
              return (
                <option key={index} value={gen}>
                  {gen}
                </option>
              );
            })}
          </select>
        </div>
        <label htmlFor={typeId} className={s.typeLabel}>
          <svg className={clsx(s.iconLabel)}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </label>
        <select
          name="species"
          className={s.inputSpecies}
          id={typeId}
          value={specie}
          onChange={handleChangeSpecies}
        >
          <option value={""}>All type</option>
          {species.map((specie, index) => {
            return (
              <option key={index} value={specie}>
                {specie}
              </option>
            );
          })}
        </select>

        <Select
          options={options}
          onChange={(option) => dispatch(setLocationId(option))}
          placeholder="Location"
          value={locationId}
          styles={{
            indicatorSeparator: () => null,
            placeholder: (provided) => ({
              ...provided,
              color: "#262626",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "#fff",
              paddingRight: "5px",
              paddingLeft: "5px",
              borderRadius: "30px",
              boxSizing: "border-box",
              border: "none",
              width: windowWidth < 768 ? "295px" : "225px",
              height: windowWidth < 768 ? "42px" : "48px",
              fontFamily: "Manrope",
              fontWeight: "500",
              fontSize: windowWidth < 768 ? "14px" : "16px",
              lineGeight: windowWidth < 768 ? "1.29" : "1.25",
              letterSpacing: "-0.03em",
              color: "#262626",
            }),
          }}
          components={{ DropdownIndicator: CustomDropdownIndicator }}
        />
      </li>

      <li className={s.boxPopularityReset}>
        <div className={s.popularityPrice}>
          <label
            htmlFor={popularId}
            className={clsx(
              s.inputPopularityPrice,
              popularity === "false" && s.inputPopularityPriceColor
            )}
          >
            Popular
            {popularity === "false" && (
              <svg className={clsx(s.icon)}>
                <use href={`${sprite}#icon-x`} />
              </svg>
            )}
          </label>
          <input
            id={popularId}
            type="radio"
            name="popular"
            value="false"
            onChange={handlePopularyChange}
            checked={popularity === "false"}
            className={s.labelRadio}
          />
          <label
            htmlFor={unpopularId}
            className={clsx(
              s.inputPopularityPrice,
              popularity === "true" && s.inputPopularityPriceColor
            )}
          >
            Unpopular{" "}
            {popularity === "true" && (
              <svg className={clsx(s.icon)}>
                <use href={`${sprite}#icon-x`} />
              </svg>
            )}
          </label>
          <input
            id={unpopularId}
            type="radio"
            name="unpopular"
            value="true"
            onChange={handlePopularyChange}
            checked={popularity === "true"}
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
        </div>

        <button className={s.reset} onClick={handleReset}>
          Reset
        </button>
      </li>
    </ul>
  );
}
