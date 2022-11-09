import { Outlet } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const CatsSubPage = ({ cats }) => {
  return (
    <> 
      {cats.map((cat) => (
        <Pet key={cat.id} kind="cat" pet={cat} />
      ))}
    </>
  )
}

export const DogsSubPage = ({ dogs }) => {
  return (
    <>
      {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
      ))}
    </>
  )
}

export const PetsList = ({ cats, dogs }) => {
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        <Outlet />
      </section>
    </section>
  );
};
