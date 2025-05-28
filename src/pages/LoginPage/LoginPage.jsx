import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import PetBlock from "../../components/PetBlock/PetBlock.jsx";
import Title from "../../components/Title/Title.jsx";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <section className={s.loginSection}>
      <ul className={s.login}>
        <li className={s.petBlock}>
          <PetBlock src="public/dogLoginPc_1x.png" alt="dog">
            <source
              srcSet="/dogLoginMob_1x.png 1x, /dogLoginMob_2x.png 2x"
              media="(max-width: 767px)"
            />
            <source
              srcSet="/dogLoginTab_1x.png 1x, /dogLoginTab_2x.png 2x"
              media="(min-width: 768px) and (max-width: 1279.5px)"
            />
            <source
              srcSet="/dogLoginPc_1x.png 1x, /dogLoginPc_2x.png 2x"
              media="(min-width: 1280px)"
            />

            <img src="/dogLoginMob_1x.png" alt="dog" />
          </PetBlock>
        </li>
        <li className={s.boxLogin}>
          <Title>Log in</Title>
          <LoginForm />
        </li>
      </ul>
    </section>
  );
}
