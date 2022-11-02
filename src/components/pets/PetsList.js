import { useParams } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const { type } = useParams();

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  function filterPetTypes(type) {
    if (type === "cats") {
      return cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />);
    } else if (type === "dogs") {
      return dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />);
    } else {
      return pets.map((pet) => <Pet key={pet.id} kind={pet.kind} pet={pet} />);
    }
  }

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">{filterPetTypes(type)}</section>
    </section>
  );
};

export default PetsList;
