import AddPet from "../AddPet/AddPet.jsx";

import PetsList from "../PetsList/PetsList.jsx";
import s from "./PetsBlock.module.css";

export default function PetsBlock({ currentUser }) {
  return (
    <ul className={s.petsBlock}>
      <li className={s.boxAddPet}>
        <h2 className={s.title}>My pets</h2>
        <AddPet />
      </li>
      <li>
        <PetsList pets={currentUser.pets} />
      </li>
    </ul>
  );
}
