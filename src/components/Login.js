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
import { useDispatch } from "react-redux";
import { addUserDetails } from "../store/action/userAction";

function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState(false);

  const LoginFunc = () => {
    if (!username || !password) {
      alert("Username and Password Should be given");
      setErrorState(true);
    }

    const data = localStorage.getItem("userDetail");
    const parseData = JSON.parse(data);

    const userDetail = parseData.filter((ele) => ele.username === username);
    console.log("userDetail", userDetail);

    if (!userDetail[0]) {
      alert("Invalid Username");
    } else if (userDetail[0].password !== password) {
      alert("Invalid Password");
    } else if (
      userDetail[0].username === username &&
      userDetail[0].password === password &&
      userDetail[0].role === "admin"
    ) {
      Navigate("/dashboard");
      dispatch(addUserDetails(userDetail[0]));
    } else if (
      userDetail[0].username === username &&
      userDetail[0].password === password
    ) {
      Navigate("/employeeTask");
      dispatch(addUserDetails(userDetail[0]));
    }
  };

  return (
    <div>
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
            Login Page
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
            }}
          >
            <TextField
              label="username"
              style={{ margin: "1rem" }}
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required={true}
              error={errorState && !username}
              helperText={errorState && !username && "Email is required"}
            />
            <TextField
              label="password"
              style={{ margin: "1rem" }}
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
              error={errorState && !password}
              helperText={errorState && !password && "Password is required"}
            />
          </div>
          <Typography
            style={{
              color: "blue",
              textDecoration: "underline",
              marginLeft: "19px",
              cursor: "pointer",
            }}
            onClick={() => {
              Navigate("/signup");
            }}
          >
            New User ?
          </Typography>
          <Grid2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 19,
            }}
          >
            <Button variant="outlined" onClick={LoginFunc}>
              Login
            </Button>
          </Grid2>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
