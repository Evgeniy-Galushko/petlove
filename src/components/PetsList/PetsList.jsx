import PetsItem from "../PetsItem/PetsItem.jsx";
import s from "./PetsList.module.css";

export default function PetsList({ pets }) {
  // console.log(pets);
  if (!pets) return;
  return (
    <ul className={s.petsList}>
      {pets.map(
        ({ _id, birthday, createdAt, imgURL, name, sex, species, title }) => {
          return (
            <li key={_id} className={s.oneCardPets}>
              <PetsItem
                id={_id}
                birthday={birthday}
                createdAt={createdAt}
                imgURL={imgURL}
                name={name}
                sex={sex}
                species={species}
                title={title}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}
