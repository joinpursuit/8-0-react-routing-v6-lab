import PetsListNav from "./PetsListNav"
import Pet from "./Pet"
import "./PetsList.css"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { useEffect } from "react"

export const PetsList = ({ pets }) => {
  const { kind } = useParams()
  const navigate = useNavigate()
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1
      acc[position].push(pet)
      return acc
    },
    [[], []]
  )
  useEffect(() => {
    if (kind === undefined) navigate("/pets/cats")
  }, [kind])

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {kind === undefined || kind === "cats"
          ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
          : null}
        {kind === "dogs" || kind === undefined
          ? dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)
          : null}
      </section>
    </section>
  )
}

export default PetsList
