import './CompletionDate.css'
const CompletionDate = (props) => {

    
const month= props.completion_date.toLocaleString('en-US', { month : 'long'});
const date = props.completion_date.toLocaleString('en-US', { day : '2-digit'});
const year = props.completion_date.getFullYear();

// const current = new Date();
// const currentMonth = current.getMonth()+1
// const currentDate =current.getDate()
// const currentYear =current.getFullYear()



return(
    <div className="box">
        <div>{date}</div>
        <div>{month}</div>
        <div>,</div>
        <div>{year}</div>
       
    </div>
)


}

export default CompletionDate