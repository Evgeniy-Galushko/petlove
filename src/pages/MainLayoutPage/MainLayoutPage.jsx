import s from "./MainLayoutPage.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar.jsx";
import { useState } from "react";

export default function MainLayoutPage() {
  const [state, setState] = useState(true);

  const hadleClick = () => {
    setState(false);
  };
  return (
    <div className={s.boxImg}>
      {state ? (
        <button to="/home" className={s.title} onClick={hadleClick}>
          petl
          <svg className={s.titleIcon}>
            <use href={`${sprite}#icon-heart-circle`} />
          </svg>
          ve
        </button>
      ) : (
        <ProgressBar />
      )}
    </div>
  );
}
