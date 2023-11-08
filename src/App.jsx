import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Components/Login";
import Property from "./Components/Property_Listings";
import Register from "./Components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState(0);
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div data-testid="app">
      <Router>
        <Property />
        <br />
        <Routes>
          <Route path="/allReservations" element={<Property />} />
          <Route path="/users/Register" element={<Register />} />
          <Route path="/users/Login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
