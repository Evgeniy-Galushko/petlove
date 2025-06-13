import clsx from "clsx";
import s from "./PetBlock.module.css";

export default function PetBlock({ children, style, addPet }) {
  return (
    <div className={clsx(s.petBlock, addPet === "addPet" && s.addPet)}>
      <picture
        className={clsx(
          s.imgPetBlock,
          style === "cat" && s.cat,
          addPet === "addPet" && s.addPets
        )}
      >
        {children}
      </picture>
    </div>
  );
}
