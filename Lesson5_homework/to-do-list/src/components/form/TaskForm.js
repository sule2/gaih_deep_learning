import {useEffect,useState} from 'react'

const initialValues = {task: '', state: 'active'};

function TaskForm({addTasks,tasks }) {
    const [taskForm,setTaskForm] = useState(initialValues);
    useEffect(() => {
        setTaskForm(initialValues);
    },[tasks]);
    const onChangeInput = (e) =>{
        setTaskForm({...taskForm,[e.target.name]: e.target.value});
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if(taskForm.task===''/* ||(taskForm.state==='') */)
        {
            return false;
        }
        addTasks([...tasks,taskForm]);
    };
    return (
        
        <div>
            <form onSubmit={onSubmit}>
            <div>
            <input name="task" 
            placeholder="Task" 
            value={taskForm.task}
            onChange={onChangeInput}/>
            </div>
            {/* <div>
                <button className="btn-list-all">All</button>
            </div>
            <div>
                <button className="btn-list-active">Active</button>
            </div>
            <div>
                <button className="btn-list-completed">Completed</button>
            </div> */}
            <div>
                <button className="btn-add-contact">Add Contact</button>
            </div>
            </form>
        </div>
    )
}

export default TaskForm
