import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useLogin } from "../AuthorizationHooks/useLogin";
import { AuthContextProvider } from "../Context/AuthContext";
import Register from "./Register";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    console.log(email, password);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" data-testid='login-form' onSubmit={handleSubmit}>
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

<button disabled={isLoading} data-testid='login-btn'> Login </button>
          {error && <div className="error">{error}</div>}
        </form>

        <button
          className="click-to-register-button"
          onClick={() =>
            ReactDOM.render(
              <AuthContextProvider>
                <Register></Register>
              </AuthContextProvider>,
              document.getElementById("root1")
            )
          }
        >
          If you Don't have an account? Please Register here
        </button>
      </div>
    </div>
  );
};

export default Login;
