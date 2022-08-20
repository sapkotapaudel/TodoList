const TaskDuration = (props) => {
  const taskDurationHandler = (event) => {
    props.onRecieved(event.target.value);
  };



  return (
    <div>
      <select onChange={taskDurationHandler} value={props.selected}>
        <option value="Today">Today's Goal</option>
        <option value="In a week">Week's Goal</option>
        <option value="In a month">Month's Goal</option>
        <option value="In a year">Year's Goal</option>
      </select>
    </div>
  );
};

export default TaskDuration;
