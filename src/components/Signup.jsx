import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  function handleTogglePassword() {
    setShowPassword((prevState) => {
      return {
        ...prevState,
        password: !prevState.password,
      };
    });
  }
  function handleToggleConfirmPassword() {
    setShowPassword((prevState) => {
      return {
        ...prevState,
        confirmPassword: !prevState.confirmPassword,
      };
    });
  }

  function handleChange(event) {
    setInputs((prevInput) => {
      const { value, name, type } = event.target;
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const [focused, setFocused] = useState({
    password: false,
    confirmPassword: false,
  });

  function handleFocusPassword() {
    setFocused((prevState) => {
      return {
        ...prevState,
        password: true,
      };
    });
  }

  function handleFocusConfirmPassword() {
    setFocused((prevState) => {
      return {
        ...prevState,
        confirmPassword: true,
      };
    });
  }

  function handleSubmit(event) {
    if (inputs.password !== inputs.confirmPassword) {
      event.preventDefault();
      alert("Password doesn't match");
    }
    if (inputs.password.length < 8) {
      event.preventDefault();
      alert("Password must be greater than 8 characters");
    }
    // if (
    //   typeof inputs.password === "string" &&
    //   typeof inputs.password === "number"
    // ) {
    //   event.preventDefault();
    //   alert("Password must container both string and number");
    // }
  }

  return (
    <div className="login">
      <form className="inputs" action="" onSubmit={handleSubmit}>
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
            type={showPassword.password ? "text" : "password"}
            placeholder="password"
            className="input"
            value={inputs.password}
            name="password"
            onChange={handleChange}
            onFocus={handleFocusPassword}
            required
          />
          {focused.password && (
            <span className="eye" onClick={handleTogglePassword}>
              {showPassword.password ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
        <div className="pass">
          <input
            type={showPassword.confirmPassword ? "text" : "password"}
            placeholder="confirm Password"
            className="input"
            value={inputs.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            onFocus={handleFocusConfirmPassword}
            required
          />
          {focused.confirmPassword && (
            <span className="eye" onClick={handleToggleConfirmPassword}>
              {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
        <button className="signIn">Sign up</button>
        <p>
          Already have an account <a href="#">Sign In</a>
        </p>
      </form>
    </div>
  );
}
