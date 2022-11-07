import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

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
const cats= pets.filter(pet=>pet.kind==="Cat")
const dogs= pets.filter(pet=>pet.kind==="Dog")

  return (
    <div className="wrapper">
      <Router>                
        <Nav />

        <Routes>
{/* <Route element={<Nav />} /> */}
          <Route
            path="/"
            element={<Home employees={employees} owners={owners} pets={pets} />}
          />

          <Route
            path="/staff"
            element={<StaffList employees={employees} />}
          />
          <Route path="/pets/*" element={<PetsList pets={pets}/>}/>

          {/* <Route path="/PetsList/:kind" element={ <PetsList pets={pets} />} /> */}

          {/* <Route element={<Footer/>} /> */}



{/* <Route  path="/pets/cats" /> */}

        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
