import "./Pet.css"
// import { Navigate } from "react-router-dom"
const iconMap = {
  cat: "🐈",
  dog: "🐕",
}

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind]
  return (
    <article key={pet.id}>
      {/* <Navigate to="/pets/cats" /> */}
      <h3>
        {icon} {pet.name}
      </h3>
    </article>
  )
}

export default Pet
