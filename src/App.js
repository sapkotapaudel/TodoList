import {useState} from 'react';
import NewTask from './components/AddNewTask/NewTask';
import AllTask from '/Users/yanapaudel/Desktop/TodoListReact/todolist/src/components/Task/AllTask.js'
const DEFAULT_TASK = [
  {
    id: '1', 
    title: 'Do Excercise',
    completion_date: new Date(2022, 7, 14),
    goal: 'In a month'
  },
  {
    id: '2', 
    title: 'Do Assignment',
    completion_date: new Date(2022, 8, 14),
    goal: 'In a year'
    
  },

]

function App() {

  const [enteredTask, setNewEnteredTask] = useState(DEFAULT_TASK);

  const newTaskAddHandler = (newTask) => {
    setNewEnteredTask((prevTask) => {
      return([newTask, ...prevTask])
    })
  }

  

  return(
    <div>
      To-do List! 
      <hr/>
      <NewTask onTaskReceive = {newTaskAddHandler} />
      <AllTask tasks = {enteredTask} />
     
    </div>
  )

 
}

export default App;
