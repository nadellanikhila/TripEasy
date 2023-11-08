import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import { useSignup } from "../AuthorizationHooks/useRegister";
import { AuthContextProvider } from "../Context/AuthContext";
import Login from "./Login";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await register(email, password);
  };

  return (
    <div className="register" data-testid='register'>
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit} data-testid='register-form'>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            data-testid='email'
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            data-testid='password'
          />

          <button disabled={isLoading} data-testid='register-btn'> Register </button>
          {error && <div className="error">{error}</div>}
        </form>
        <button
          className="click-to-login-button"
          onClick={() =>
            ReactDOM.render(
              <AuthContextProvider>
                <Login></Login>
              </AuthContextProvider>,
              document.getElementById("root1")
            )
          }
        >
          Already have an account? Login here
        </button>
      </div>
    </div>
  );
};

export default Register;
