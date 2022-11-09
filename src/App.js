import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import { DogsSubPage, CatsSubPage, PetsList } from './components/pets/PetsList'

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    // BrowserRouter: Es el encargado de hacerle saber a nuestra aplicacion que se utilizará el sistema de enrutado
    <BrowserRouter>
      <div className="wrapper">
        <Nav />

        {/* Routes: Es el componente encargado de contener el listado de rutas / paginas (secciones que van a cambiar en respuesta a la URL) */}
        <Routes>
          {/* Route: Es el componente que le da la funcionalidad de ruta a nuestras paginas  */}
          {
            /* Necesita obligatoriamente recibir 2 props:
                path ==> Es el fragmento de URL que responder con la pagina
                element ==> Es un componente que representa una pagina y que sera mostrado al hacer match con la url del path
            */
          }
          
          {/* */}
          <Route index path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
          <Route path="/staff" element={<StaffList employees={employees} />}/>
          <Route path="/pets" element={<PetsList cats={cats} dogs={dogs} />}>
            <Route index element={<Navigate to="cats" />} />
            <Route path="dogs" element={<DogsSubPage dogs={dogs} />} />{/*  /pets/dogs */}
            <Route path="cats" element={<CatsSubPage cats={cats} />} />{/*  /pets/cats */}
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
