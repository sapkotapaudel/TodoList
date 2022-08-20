import "./AddTaskForm.css";
import { useState } from "react";

const AddTaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCompletionDate, setCompletionDate] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const userTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const userDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const userCompletionDuration = (event) => {
    setCompletionDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      title: enteredTask,
      completion_date: new Date(enteredDate),
      goal: enteredCompletionDate,
    };

    console.log(newTask)
    props.onReceive(newTask);
    setFormVisible(false);
    setEnteredDate("");
    setEnteredTask("");
    setCompletionDate("");
  };

  const hideFormHandler = (event) => {
    event.preventDefault();
    setFormVisible(false);
  };

  const showFormHandler = () => {
    setFormVisible(true);
  };

  return (
    <div className="add-form" >
      {formVisible && (
        <form onSubmit={formSubmitHandler}>
         
          <label>Task</label>
          <input type="text" value={enteredTask} onChange={userTaskHandler} />
       

          
          <label>Deadline</label>
          <input type="date" value={enteredDate} onChange={userDateHandler} />
          

          
          <label>When do you want to complete this task?</label>
          <select
            onChange={userCompletionDuration}
            value={enteredCompletionDate}
            selected={enteredCompletionDate}
            className = "userSelected"
          >
            <option value="Today">Today</option>
            <option value="In a week">In a week</option>
            <option value="In a month">In a month</option>
            <option value="In a year">In a year</option>
          </select>
         

          
          <button type="button" onClick={hideFormHandler} className="cancelbtn">
            CANCEL
          </button>
          <button type="submit"  className="addbtn">
            ADD TASK
          </button>
       
        </form>
      )}

      {!formVisible && (
        <form>
          <button type="button" onClick={showFormHandler}>
            {" "}
            Add Task
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTaskForm;
