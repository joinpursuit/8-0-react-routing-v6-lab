import { Navigate, useParams } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const { type } = useParams();
  console.log(type);
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />

      <section className="pets-list">
        {/* All cats section */}
        {type === "cats" &&
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)}

        {/* All dogs section */}
        {type === "dogs" &&
          dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}

        {type !== "cats" && type !== "dogs" && <Navigate replace to="/404" />}
      </section>
    </section>
  );
};

export default PetsList;
