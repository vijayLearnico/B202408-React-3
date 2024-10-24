import React from "react";
import TaskForm from "./TaskForm";
import TaskTable from "./TaskTable";

function Dashboard() {
  return (
    <div>
      <TaskForm />
      <TaskTable />
    </div>
  );
}

export default Dashboard;
