import '../App.css';
import { useState,useEffect } from 'react';
import TaskForm from './form/TaskForm.js';
import Tasks from './list/Tasks.js';

function Home() {
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
    }, [tasks])
  return (
    <div className="App">
      <section className='todoapp'>
      <h1>Todos</h1>
      <Tasks tasks={tasks}/>
      <TaskForm addTask={setTask} tasks={tasks}/>
      
      </section>
      
    </div>
  );
}

export default Home;
