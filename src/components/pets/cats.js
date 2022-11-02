import React from "react"
import PetsList from "./PetsList"

function cats({ pets }) {
  return (
    <div>
      <PetsList pets={pets} />
    </div>
  )
}

export default cats
