import PetBlock from "../../components/PetBlock/PetBlock.jsx";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <section className={s.loginSection}>
      <ul className={s.login}>
        <li className={s.petBlock}>
          <PetBlock src="public/dogLoginPc_1x.png" alt="dog">
            {/* <img
              srcSet="../../../public/dogLoginMob_1x.png 1x, ../../../public/dogLoginMob_2x.png 2x"
              src="../../../public/dogLoginMob_1x.png"
              alt="Camila Garcia"
            />

            <img
              srcSet="../../../public/dogLoginTab_1x.png 1x, ../../../public/dogLoginTab_2x.png 2x"
              src="../../../public/dogLoginTab_1x.png"
              alt="Camila Garcia"
            />

            <img
              srcSet="../../../public/dogLoginPc_1x.png 1x, ../../../public/dogLoginPc_2x.png 2x"
              src="../../../public/dogLoginPc_1x.png"
              alt="Camila Garcia"
            /> */}
            <source
              srcSet="/dogLoginMob_1x.png 1x, /dogLoginMob_2x.png 2x"
              media="(max-width: 767px)"
            />
            <source
              srcSet="/dogLoginTab_1x.png 1x, /dogLoginTab_2x.png 2x"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/dogLoginPc_1x.png 1x, /dogLoginPc_2x.png 2x"
              media="(min-width: 1280px)"
            />

            <img src="/dogLoginPc_1x.png" alt="dog" />
          </PetBlock>
        </li>
        <li></li>
      </ul>
    </section>
  );
}
