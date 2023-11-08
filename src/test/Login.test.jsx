
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Login, {validateEmail} from "../Components/Login";
import Register from "../Components/Register";
import { AuthContextProvider } from "../Context/AuthContext";

it("should ", async () => {
  const { getByTestId } = render(
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );
  expect(getByTestId("login-form")).toBeDefined();
  const email = "test@gmail.com";
  const password = "Ramesh1*";
  const emailField = getByTestId("email");
  const passwordField = getByTestId("password");
  

  expect(emailField).toBeDefined();
  expect(passwordField).toBeDefined();

  expect(getByTestId("login-btn")).toBeDefined();
  fireEvent.change(emailField, { target: { value: email } });
  fireEvent.change(passwordField, { target: { value: password } });
  expect(emailField).toHaveDisplayValue(email)
  expect(passwordField).toHaveDisplayValue(password);

});

