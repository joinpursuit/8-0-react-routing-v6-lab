import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const navigate = useNavigate();
  useEffect(() => navigate("/pets/cats"), []);

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  let { animalType } = useParams();
  console.log(animalType);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {animalType === "cats"
          ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
          : dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}
      </section>
    </section>
  );
};

export default PetsList;
