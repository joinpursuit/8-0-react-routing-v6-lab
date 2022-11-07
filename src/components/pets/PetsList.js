import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
// import { Router } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useParams, useNavigate, Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";

export const PetsList = ({ pets }) => {
  // let { id } = useParams();
  // const [pet] = pets.filter( pete=> pete.id ===id)
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
  let navigate = useNavigate();
  const { "*": kind } = useParams();

  useEffect(() => {
    console.log(!!kind);

    if (kind !== "dogs") navigate("/pets/cats");
  }, [kind]);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {kind === "cats"
          ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
          : dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}
      </section>
    </section>
  );
};

export default PetsList;
