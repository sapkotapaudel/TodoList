import AddTaskForm from "./AddTaskForm"




const NewTask = (props) => {

    const storeNewTaskHandler = (enteredTask) => {
        const TaskData = {
            ...enteredTask, 
            id: Math.random().toString
        };
        props.onTaskReceive(TaskData);
    };

    return(<AddTaskForm onReceive = {storeNewTaskHandler}/>);

}

export default NewTask