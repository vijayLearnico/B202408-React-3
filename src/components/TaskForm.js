import { Button, Paper, Select, TextField, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask, editTaskfromArr } from "../store/action/taskAction";

function TaskForm() {
  const dispatch = useDispatch();
  const reducerData = useSelector((state) => state.task);
  console.log("reducerData", reducerData);

  const editData = reducerData?.editData;
  const userDetails = JSON.parse(localStorage.getItem("userDetail"));

  const employees = userDetails.filter((ele) => ele.role === "employee");

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [assignee, setAssignee] = useState("");
  const [estHr, setEstHr] = useState("");
  const [errorState, setErrorState] = useState(false);

  const submit = () => {
    const Newdata = {
      taskName: taskName,
      taskDesc: taskDesc,
      assignee: assignee,
      estHr: estHr,
    };

    if (editData?.taskName) {
      const temp = reducerData?.taskDetails;
      temp.splice(editData.index, 1, Newdata);
      dispatch(editTaskfromArr(temp));
      localStorage.setItem("taskDetails", JSON.stringify(temp));
    } else {
      dispatch(addNewTask(Newdata));
      localStorage.setItem(
        "taskDetails",
        JSON.stringify([...reducerData?.taskDetails, Newdata])
      );
    }

    setTaskName("");
    setTaskDesc("");
    setAssignee("");
    setEstHr("");
  };

  useEffect(() => {
    if (editData) {
      setTaskName(editData.taskName);
      setTaskDesc(editData.taskDesc);
      setAssignee(editData.assignee);
      setEstHr(editData.estHr);
    }
  }, [editData]);

  return (
    <div
      style={{
        height: "100vh",
        width: "70vw",
        display: "flex",
        flexDirection: "column",
        margin: "2rem",
      }}
    >
      <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        elevation={5}
      >
        <TextField
          label="Task Name"
          style={{ margin: "1rem" }}
          type="text"
          value={taskName}
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
          required={true}
          error={errorState && !taskName}
          helperText={errorState && !taskName && "Task Name is required"}
        />
        <TextField
          label="Task Description"
          style={{ margin: "1rem" }}
          type="text"
          value={taskDesc}
          onChange={(event) => {
            setTaskDesc(event.target.value);
          }}
          required={true}
          error={errorState && !taskDesc}
          helperText={errorState && !taskDesc && "Task description is required"}
        />
        <Select
          label="Task Name"
          style={{ margin: "1rem", width: "55%" }}
          value={assignee}
          onChange={(event) => {
            setAssignee(event.target.value);
          }}
          required={true}
          error={errorState && !taskName}
          helperText={errorState && !taskName && "Task Name is required"}
        >
          {employees.map((ele) => (
            <MenuItem value={ele.username}>{ele.name}</MenuItem>
          ))}
        </Select>
        <TextField
          label="Estimated hours"
          style={{ margin: "1rem" }}
          type="number"
          value={estHr}
          onChange={(event) => {
            setEstHr(event.target.value);
          }}
          required={true}
          error={errorState && !estHr}
          helperText={errorState && !estHr && "Estimated hours is required"}
        />
        <Button variant="outlined" style={{ margin: "1rem" }} onClick={submit}>
          {editData?.taskName ? "Update" : "Submit"}
        </Button>
      </Paper>
    </div>
  );
}

export default TaskForm;
