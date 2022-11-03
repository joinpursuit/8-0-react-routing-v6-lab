import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  // let { kind } = useParams(); // destructuring id from data
  // console.log(useParams);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/pets/cats");
  // };

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
        {cats.map((cat) => (
          <Link to="/pets/cats">
            <Pet key={cat.id} kind="cat" pet={cat} />
          </Link>
        ))}

        {/* All dogs section */}
        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
