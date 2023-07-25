import {useEffect,useState} from 'react'

const initialValues = {task: '', done: false};

function TaskForm({addTask,tasks }) {
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
        addTask([...tasks,taskForm]);
    };
    return (
        
        <header className="header">
            <form onSubmit={onSubmit}>
            <input name="task" className='new-todo'
            placeholder="What do I do?" 
            value={taskForm.task} autoFocus
            onChange={onChangeInput}/>
            {/* <div>
                <button className="btn-list-all">All</button>
            </div>
            <div>
                <button className="btn-list-active">Active</button>
            </div>
            <div>
                <button className="btn-list-completed">Completed</button>
            </div> */}
            {/* <div>
                <button className="btn-add-contact">Add Contact</button>
            </div> */}
            </form>
        </header>
    )
}

export default TaskForm
