import s from "./PetBlock.module.css";

export default function PetBlock({ children, src, alt }) {
  return (
    <div className={s.petBlock}>
      <picture className={s.imgPetBlock}>{children}</picture>
    </div>
  );
}
