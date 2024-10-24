import React, { useState } from "react";
import {
  Button,
  Container,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passowordError, setPassowordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const navigate = useNavigate();

  const submit = () => {
    if (!name) {
      return setNameError(true);
    }
    if (!username) {
      return setUserNameError(true);
    }
    if (!password) {
      return setPassowordError(true);
    }

    const newUser = [
      {
        name: name,
        username: username,
        password: password,
        role: "employee",
      },
    ];

    const data = localStorage.getItem("userDetail");

    let finalData = newUser;

    if (data) {
      finalData = [...JSON.parse(data), ...newUser];
    }
    console.log("finalData", ...finalData);

    localStorage.setItem("userDetail", JSON.stringify(finalData));

    navigate("/");
  };

  return (
    <div>
      {" "}
      <Container
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper elevation={7}>
          <Typography textAlign="center" margin={2}>
            Sign-Up Page
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
            }}
          >
            <TextField
              name="name"
              label="Name"
              style={{ margin: 5 }}
              value={name}
              onChange={(event) => {
                if (event.target.value) {
                  setNameError(false);
                }
                setName(event.target.value);
              }}
              error={nameError}
              helperText={nameError && "Name is required"}
            />
            <TextField
              name="username"
              label="Username"
              style={{ margin: 5 }}
              value={username}
              onChange={(event) => {
                if (event.target.value) {
                  setUserNameError(false);
                }
                setUsername(event.target.value);
              }}
              error={userNameError}
              helperText={userNameError && "Username is required"}
            />
            <TextField
              name="password"
              label="Password"
              style={{ margin: 5 }}
              value={password}
              onChange={(event) => {
                if (event.target.value) {
                  setPassowordError(false);
                }
                setPassword(event.target.value);
              }}
              error={passowordError}
              helperText={passowordError && "Password is required"}
            />
          </div>
          <Grid2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 19,
            }}
          >
            <Button variant="outlined" onClick={submit}>
              Submit
            </Button>
          </Grid2>
        </Paper>
      </Container>
    </div>
  );
}

export default SignUp;
