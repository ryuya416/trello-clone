import React from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";

export const TaskCards = () => {
  return (
    <div className="taskCartArea">
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};
