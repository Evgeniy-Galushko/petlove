import { useDispatch, useSelector } from "react-redux";
import AddPetForm from "../../components/AddPetForm/AddPetForm.jsx";
import PetBlock from "../../components/PetBlock/PetBlock.jsx";
import s from "./AddPetPage.module.css";
import { requestSpecies } from "../../redux/notices/operations.js";
import { selectSpecies } from "../../redux/notices/selectors.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPets } from "../../redux/auth/operations.js";
import { selectToken } from "../../redux/auth/selectors.js";
import { Toaster } from "react-hot-toast";

export default function AddPetPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addPet, setAddPet] = useState(false);
  const token = useSelector(selectToken);
  const species = useSelector(selectSpecies);

  useEffect(() => {
    dispatch(requestSpecies());

    if (addPet) {
      navigate("/profile");
    }

    if (!token) {
      navigate("/home");
    }
  }, [addPet, token, dispatch]);

  const petAdded = () => {
    setAddPet(true);
  };

  const handleSubmit = (values, actions) => {
    dispatch(addPets({ values, petAdded }));
    actions.resetForm();
  };

  return (
    <section className={s.sectionAddPet}>
      <Toaster
        toastOptions={{
          className: "",
          duration: 4000,
          style: {},
        }}
      />
      <ul className={s.addPet}>
        <li>
          <PetBlock addPet={"addPet"}>
            <source
              srcSet="/addPets_mob_1x.png 1x, /addPets_mob_2x.png 2x"
              media="(max-width: 767px)"
            />
            <source
              srcSet="/addPets_tab_1x.png 1x, /addPets_tab_2x.png 2x"
              media="(min-width: 768px) and (max-width: 1279.5px)"
            />
            <source
              srcSet="/addPets_desk_1x.png 1x, /addPets_desk_2x.png 2x"
              media="(min-width: 1280px)"
            />

            <img src="/addPets_mob_1x.png" alt="dog" />
          </PetBlock>
        </li>
        <li className={s.boxAddPetForm}>
          <AddPetForm species={species} handleSubmit={handleSubmit} />
        </li>
      </ul>
    </section>
  );
}
