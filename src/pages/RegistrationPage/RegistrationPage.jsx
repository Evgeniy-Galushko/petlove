import PetBlock from "../../components/PetBlock/PetBlock.jsx";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import Title from "../../components/Title/Title.jsx";
import { Toaster } from "react-hot-toast";
import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <section className={s.registrationSection}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <ul className={s.registration}>
        <li className={s.petBlock}>
          <PetBlock style={"cat"}>
            <source
              srcSet="/catRegisterMob_1x.png 1x, /catRegisterMob_2x.png 2x"
              media="(max-width: 767px)"
            />
            <source
              srcSet="/catRegisterTab_1x.png 1x, /catRegisterTab_2x.png 2x"
              media="(min-width: 768px) and (max-width: 1279.5px)"
            />
            <source
              srcSet="/catRegisterPC_1x.png 1x, /catRegisterPC_2x.png 2x"
              media="(min-width: 1280px)"
            />

            <img src="/catRegisterMob_1x.png" alt="cat" />
          </PetBlock>
        </li>
        <li className={s.boxRegistration}>
          <Title>Registration</Title>
          <RegistrationForm />
        </li>
      </ul>
    </section>
  );
}
