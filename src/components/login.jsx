import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function handleChange(event) {
    setInputs((prevInput) => {
      const { value, name } = event.target;
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  return (
    <div className="login">
      <form className="inputs" action="POST">
        <h1 className="title">Welcome To TechIno</h1>
        <input
          type="text"
          placeholder="Username"
          className="input"
          name="userName"
          value={inputs.userName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="input"
          value={inputs.email}
          name="email"
          onChange={handleChange}
          required
        />

        <div className="pass">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="input"
            value={inputs.password}
            name="password"
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          {isFocused && (
            <span className="eye" onClick={handleTogglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>

        <button className="signIn">Sign in</button>
        <p>
          Don't have an account <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
