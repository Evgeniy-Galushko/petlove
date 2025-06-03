import s from "./FriendsItem.module.css";

export default function FriendsItem({
  address,
  email,
  imageUrl,
  addressUrl,
  phone,
  title,
  url,
  workDays,
}) {
  const workingHours =
    workDays && workDays.find((objekt) => objekt.isOpen === true);

  if (address) {
    console.log(address.length > 22 && address.slice(0, 19));
  }

  // console.log(phone.lenght);
  return (
    <ul className={s.boxCard}>
      <li className={s.boxImg}>
        <a href={url} target="blank">
          <img src={imageUrl} alt={title} className={s.img} />
        </a>
      </li>
      <li>
        <div className={s.workingHours}>
          {!workingHours ? (
            <p className={s.paragraphWorkingHours}>Day and night</p>
          ) : (
            <p className={s.paragraphWorkingHours}>
              {workingHours.from}-{workingHours.to}
            </p>
          )}
        </div>
        <h2 className={s.titleCard}>{title}</h2>
        <div className={s.boxContacts}>
          <p className={s.paragraphContacts}>Email:</p>
          {email ? (
            <a href={`mailto:${email}`} className={s.contactsLink}>
              {email}
            </a>
          ) : (
            <p className={s.paragrapContact}>website only</p>
          )}
        </div>

        <div className={s.boxContacts}>
          <p className={s.paragraphContacts}>Address:</p>
          {address ? (
            <a href={addressUrl} target="blank" className={s.contactsLink}>
              {address.length > 18 && address.slice(0, 18) + "..."}
            </a>
          ) : (
            <p className={s.paragrapContact}>website only</p>
          )}
        </div>
        <div className={s.boxContacts}>
          <p className={s.paragraphContacts}>Phone:</p>

          {phone ? (
            <a href={`tel:${phone}`} className={s.contactsLink}>
              {phone}{" "}
            </a>
          ) : (
            <p className={s.paragrapContact}>email only</p>
          )}
        </div>
      </li>
    </ul>
  );
}
