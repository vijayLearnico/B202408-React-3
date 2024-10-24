import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTaskfromArr, UpdateEditData } from "../store/action/taskAction";

function TaskTable() {
  const data = useSelector((state) => state.task);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const taskDetails =
    user?.userDetails?.role === "admin"
      ? data?.taskDetails
      : JSON.parse(localStorage.getItem("taskDetails")).filter(
          (ele) => ele.assignee === user?.userDetails?.username
        );

  const deleteTask = (index) => {
    const taskDetails = data?.taskDetails;
    taskDetails.splice(index, 1);
    dispatch(deleteTaskfromArr(taskDetails));
    localStorage.setItem("taskDetails", JSON.stringify(taskDetails));
  };

  const editTask = (index) => {
    const taskDetails = data?.taskDetails;
    const editData = taskDetails[index];
    dispatch(UpdateEditData({ ...editData, index }));
  };

  return (
    <Paper elevation={5}>
      <TableContainer style={{ margin: "1rem" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell align="right">Task Description</TableCell>
              {user?.userDetails?.role === "admin" && (
                <TableCell align="right">Assignee</TableCell>
              )}
              <TableCell align="right">Estimated Hours</TableCell>
              {user?.userDetails?.role === "admin" && (
                <TableCell align="right">Action</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {taskDetails?.map((row, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.taskName}
                </TableCell>
                <TableCell align="right">{row.taskDesc}</TableCell>
                {user?.userDetails?.role === "admin" && (
                  <TableCell align="right">{row.assignee}</TableCell>
                )}
                <TableCell align="right">{row.estHr}</TableCell>
                {user?.userDetails?.role === "admin" && (
                  <TableCell align="right">
                    <EditIcon
                      onClick={() => {
                        editTask(index);
                      }}
                    />
                    <DeleteIcon
                      onClick={() => {
                        deleteTask(index);
                      }}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TaskTable;
