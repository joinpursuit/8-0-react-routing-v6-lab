import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams,  useNavigate,  } from "react-router-dom";
import { useEffect } from "react";

export const PetsList = ({ pets }) => {
  let { kind } = useParams();
  const navigate = useNavigate();
  
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
  useEffect(()=>{
    if(kind==undefined) {
      navigate("/pets/cats");
    };
  },[]);
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        {kind==undefined||kind=="cats" 
          ?cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))
          :""
        }
        {/* All dogs section */}
        {kind==undefined||kind=="dogs" 
          ?dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))
          :""
        }
      </section>
    </section>
  );
};

export default PetsList;
