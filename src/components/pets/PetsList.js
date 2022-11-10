import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const {id} = useParams()
  const navigate = useNavigate();
  // const [id, setid] = useState(id);
  useEffect(()=>{
    if(id === undefined){
      navigate("/pets/cats");
    }
  },[])

  console.log(id);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        {id === "cats" || id === "all" ? 
        cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        )): ""}

        {/* All dogs section */}
        {id === "dogs" || id === "all" ? 
        dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        )): ""}
      </section>
    </section>
  );
};

export default PetsList;
