import s from "./UserBlock.module.css";
import sprite from "../../img/icon/icon-sprite.svg";

export default function UserBlock({ currentUser }) {
  console.log(currentUser);
  const { name, email, phone, avatar } = currentUser;
  return (
    <ul>
      <li className={s.imgIcon}>
        {avatar ? (
          <img src={avatar} alt={name} className={s.imgUser}></img>
        ) : (
          <div className={s.boxIcon}>
            <svg className={s.iconUser}>
              <use href={`${sprite}#icon-user`} />
            </svg>
            <button className={s.buttonImg}>Upload photo</button>
          </div>
        )}
      </li>
      <h2 className={s.title}>My information</h2>
      <li className={s.boxInput}>
        <input type="text" value={name} className={s.input} />
        <input type="text" value={email} className={s.input} />
        <input type="text" value={phone} className={s.input} />
      </li>
    </ul>
  );
}
