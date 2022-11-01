import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const PetsList = ({ pets }) => {
let {kind} = useParams()
let navigate = useNavigate()
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

useEffect(() => {
  if(kind === undefined){
    navigate("/pets/cats")
  }
}, [])

  return (
    <section className="pets-wrapper">
       
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        
        {/* All cats section */}
        {kind === "cats" || kind === undefined ? cats.map((cat) => {
          return (
            <Pet key={cat.id} kind="cat" pet={cat} />
          )
        }): null}

        {/* All dogs section */}
        {kind === "dogs" || kind === undefined ? dogs.map((dog) => {
          return (
            <Pet key={dog.id} kind="dog" pet={dog} />
          )
        }): null}
  
      </section>
         
    </section>
  );
};

export default PetsList;
