import CompletionDate from "./CompletionDate"
import './EachTask.css'
import {useState} from 'react';
import Card from '../UI/Card'

const EachTask = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(props.title);

    const changeTitleHandler = (event) => {
        setEnteredTitle('updated')
    }

    return(
        <Card>
        <div className="tasks">
            
            {enteredTitle}
          
            <CompletionDate completion_date = {props.completion_date} />

            <button onClick={changeTitleHandler}>Change Title</button>
             
             <hr/>
            
        </div>
        </Card>
    )
}

export default EachTask