import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BecomeHost from "./Components/BecomeHost";
import Favourites from "./Components/Favourites";
import Login from "./Components/Login";
import LogOutButton from "./Components/LogOutButton";
import SideBar from "./Components/SideBar";
import { AuthContextProvider } from "./Context/AuthContext";
import Search from "./Search";

if (localStorage.getItem("user")) {
  ReactDOM.render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>,
    document.getElementById("root")
  );
  ReactDOM.render(<SideBar />, document.getElementById("sidebar_id"));
  ReactDOM.render(
    <AuthContextProvider>
      <LogOutButton />
    </AuthContextProvider>,
    document.getElementById("logoutBUTTONDIVID")
  );
  ReactDOM.render(
    <AuthContextProvider>
      <BecomeHost />
    </AuthContextProvider>,
    document.getElementById("becomeHostDivID")
  );
  ReactDOM.render(<Favourites />, document.getElementById("favouritesID"));
  console.log("ssss");
  console.log(localStorage.getItem("user"));
} else {
  ReactDOM.render(
    <AuthContextProvider>
      <Login></Login>
    </AuthContextProvider>,
    document.getElementById("root1")
  );
}
const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
    console.log("linkssss");
  });
});

