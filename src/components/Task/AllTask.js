import EachTask from "./EachTask";
import TaskDuration from "./TaskDuration";
import { useState } from "react";

const AllTask = (props) => {
  const [enteredDuration, setEnteredDuration] = useState("week");

  const taskFilterHandler = (neededDuration) => {
    setEnteredDuration(neededDuration);
    console.log(neededDuration);
  };

  return (
    <div>
      <TaskDuration onRecieved={taskFilterHandler} selected={enteredDuration} />

      {props.tasks
        .filter((task) => {
          return task.goal === enteredDuration;
        })
        .map((filteredDuration) => (
          <EachTask
            key={filteredDuration.id}
            title={filteredDuration.title}
            completion_date={filteredDuration.completion_date}
          />
        ))}

      {props.tasks.filter((task) => {
        return task.goal === enteredDuration;
      }).length === 0 && <p>No Task Found</p>}
    </div>
  );
};

export default AllTask;
