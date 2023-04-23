import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../login/Register";

const Content = () => {
  const [jwtToken, setJwtToken] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const showRegisterHandler = () => {
    setShowLogin(false);
  };

  const showLoginHandler = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {showLogin ? (
        <Login showRegisterFunc={showRegisterHandler} />
      ) : (
        <Register showLoginFunc={showLoginHandler} />
      )}
    </div>
  );
};

export default Content;
