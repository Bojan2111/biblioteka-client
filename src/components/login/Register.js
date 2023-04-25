import React, { useState } from "react";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    console.log(username, email, password, confirmPassword);
    props.showLoginFunc();
  };

  return (
    <div>
      <form onSubmit={registerSubmitHandler}>
        <label>Username: </label>
        <input type="text" onChange={usernameChangeHandler} value={username} />
        <label>Email: </label>
        <input type="email" onChange={emailChangeHandler} value={email} />
        <label>Password: </label>
        <input
          type="password"
          onChange={passwordChangeHandler}
          value={password}
        />
        <label>Confirm password: </label>
        <input type="password" onChange={confirmPasswordChangeHandler} />
        <div>
          <input type="submit" value="Submit" />
          <button onClick={props.showLoginFunc}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
