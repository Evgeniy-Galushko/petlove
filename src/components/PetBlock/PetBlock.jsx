import clsx from "clsx";
import s from "./PetBlock.module.css";

export default function PetBlock({ children, style }) {
  return (
    <div className={s.petBlock}>
      <picture className={clsx(s.imgPetBlock, style === "cat" && s.cat)}>
        {children}
      </picture>
    </div>
  );
}
