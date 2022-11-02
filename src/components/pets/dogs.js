import React from "react"
import PetsList from "./PetsList"

function dogs({ pets }) {
  return (
    <div>
      <PetsList pets={pets} />
    </div>
  )
}

export default dogs
