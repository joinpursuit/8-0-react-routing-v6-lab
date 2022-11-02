import React from "react"
import { Navigate } from "react-router-dom"
function birds({ pets }) {
  return (
    <div>
      <h1>404... PAGE NOT FOUND!!</h1>
      <Navigate to="/" />
    </div>
  )
}

export default birds
