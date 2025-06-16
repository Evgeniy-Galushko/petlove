import s from "./ModalNotice.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { star } from "../../utils/menu.js";
import { useParams } from "react-router-dom";
import { requestAddFriend } from "../../redux/notices/operations.js";

export default function ModalNotice({ isOpen, onClose, friend }) {
  if (!friend) return;
  const dispatch = useDispatch();

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

  console.log(friend);

  const {
    _id,
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    comment,
    price,
    user: { email, phone },
  } = friend;

  // const arr = star(5);
  // let stars;
  // if (popularity >= 5) {
  //   const arr = star(5);
  //   stars = arr.map((ar, index) => {
  //     return (
  //       <svg key={index} className={s.icon} width={16} height={16}>
  //         <use href={`${sprite}#icon-star`} />
  //       </svg>
  //     );
  //   });
  // }
  // if (popularity < 5) {
  //   const number = 5 - popularity;
  //   const arr = star(number);
  // }

  // console.log(_id);

  const handleClick = () => {
    dispatch(requestAddFriend(_id));
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <ul className={s.modalNotice}>
        <button onClick={onClose} className={s.buttonClose}>
          <svg className={s.icon} width={24} height={24}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <li>
          <img src={imgURL} alt={name} className={s.imgModal} />
        </li>
        <li>
          <h3 className={s.title}>{title}</h3>
        </li>
        <li className={s.boxPopularity}>
          <svg className={s.icon} width={16} height={16}>
            <use href={`${sprite}#icon-star`} />
          </svg>
          <p className={s.popularity}>{popularity}</p>
        </li>
        <li>
          <ul className={s.boxCharacteristics}>
            <li className={s.oneCharacteristics}>
              <p className={s.description}>Name</p>
              <p className={s.meaning}>{name}</p>
            </li>
            <li className={s.oneCharacteristics}>
              <p className={s.description}>Birthday</p>
              {birthday ? (
                <p className={s.meaning}>
                  {birthday.slice(8, 10)}.{birthday.slice(5, 7)}.
                  {birthday.slice(0, 4)}
                </p>
              ) : (
                <p className={s.meaning}>No birthday</p>
              )}
            </li>
            <li className={s.oneCharacteristics}>
              <p className={s.description}>Gender</p>
              <p className={s.meaning}>{sex}</p>
            </li>
            <li className={s.oneCharacteristics}>
              <p className={s.description}>Species</p>
              <p className={s.meaning}>{species}</p>
            </li>
          </ul>
        </li>
        <li>
          <p className={s.comment}>{comment}</p>
        </li>
        <li>
          {!price ? (
            <p className={s.price}>No price</p>
          ) : (
            <p className={s.price}>&#x24;{price}</p>
          )}
        </li>
        <li className={s.boxButton}>
          <button type="button" className={s.buttonAdd} onClick={handleClick}>
            Add to
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-heart-wite`} />
            </svg>
          </button>
          {(email && (
            <a className={s.linkBtn} href={`mailto:${email}`}>
              Contact
            </a>
          )) ||
            (phone && <a href={`tel:${phone}`}>Contact</a>)}
        </li>
      </ul>
    </Modal>
  );
}
