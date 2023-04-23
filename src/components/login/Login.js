import React, { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Username: </label>
        <input type="text" onChange={usernameChangeHandler} value={username} />
        <label>Password: </label>
        <input
          type="password"
          onChange={passwordChangeHandler}
          value={password}
        />
        <div>
          <input type="submit" value="Submit" />
          <button onClick={props.showRegisterFunc}>Registracija</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
