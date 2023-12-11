import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleClick = async () => {
    let response = await fetch("http://localhost:5000/patrons/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    response = await response.json();
    
    localStorage.setItem("username",response.username)
    localStorage.setItem("type","patron")
    window.location.href="/"
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBInput
          wrapperClass="mb-4"
          label="Username"
          id="form1"
          type="text"
          onChange={(e)=>{setUsername(e.target.value)}}
          name="Username "
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          onChange={(e)=>{setPassword(e.target.value)}}
          name="Password"
        />

        <button onClick={handleClick} className="w-100  btn-primary">
          Sign in
        </button>
        <p className="text-center">
          Not a member? <Link to="/register">Register</Link>
        </p>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;
