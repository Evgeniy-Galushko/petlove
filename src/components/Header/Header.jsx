import Logo from "../Logo/Logo.jsx";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <section className={s.sectionHeader}>
        <Logo style={"white"} />
      </section>
    </header>
  );
}
