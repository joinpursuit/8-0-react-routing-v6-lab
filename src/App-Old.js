import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";

/*
  Components
*/
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

  return (
    <div className="App">
      <Router>

      <div className="wrapper">
      <Nav />
      {/* <Home employees={employees} owners={owners} pets={pets} />

      <StaffList employees={employees} />
      <PetsList pets={pets} /> */}
  
  {/* <Route
              // path = "/pets/cats/" element={<PetsList pets={pets} type={'pets'} />} />
            <Route
              // path = "/pets/dogs/" element={<PetsList pets={pets} type={'pets'} />} /> */}
      <main>
          <Routes>

            <Route 
              path ="/" element={<Home />} />

            <Route 
              path ="/staffList" element= {<StaffList employees={employees} type={'Staff'}/>} />
            <Route
              path = "/pets" element={<PetsList pets={pets} type={'pets'}/>} />
  
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
    </div>
  );
}


export default App;
