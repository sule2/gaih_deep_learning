import { useState,useEffect } from 'react'
import TaskForm from './TaskForm/TaskForm'
function Tasks() {
    const [tasks,setTask] = useState([
        {
            task: "Learn Javascript",
            state: "completed"
        },
        {
            task: "Learn React",
            state: "active"
        },
        {
            task: "Have a Life",
            state: "active"
        }
    ]);
    useEffect(() => {
        console.log(tasks);
    }, [tasks]);
    return (
        <div>
            <h1>todos</h1>
            <Tasks tasks={tasks}/>
            <TaskForm addTask={setTask} tasks={tasks}/>
        </div>
    )
}

export default Tasks;
