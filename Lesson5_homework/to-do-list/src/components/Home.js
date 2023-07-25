import '../App.css';
import { useState,useEffect } from 'react';
import TaskForm from './form/TaskForm.js';
import Tasks from './list/Tasks.js';

function Home() {
  const [tasks,setTask] = useState([
        {
            task: "Learn Javascript",
            done: false
        },
        {
            task: "Learn React",
            done: false
        },
        {
            task: "Have a Life",
            done: false
        }
    ]);
    const[filterState,setFilterState]=useState('');
    //const[allMarked,setAllMarked] = useState(false);
    //const[taskList,setTasks]=useState(tasks);

    const todoDone = tasks.filter((item)=>item.done===true  );
    const todoLeft = tasks.filter((item)=>item.done === false);
    const filtered= filterState === '' ? tasks : filterState === true ? todoDone : todoLeft;
    /* tasks.filter((item)=>{
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase()
            .includes(filterState.toLowerCase())
        );
    }) */
    
    useEffect(() => {
        console.log(tasks);
    }, [tasks,filtered])
  return (
    <div /* className="App" */>
      <section className='todoapp'>
      <h1>Todos</h1>
      <TaskForm addTask={setTask} tasks={tasks}/>
      <Tasks tasks={filtered}/>

      <footer className="footer">
      <span className="todo-count">
                    <strong>{tasks.length}</strong>
                     items left
                </span>

                <ul className="filters">
                    <li>
                        <button onClick={()=>setFilterState("")}>All</button>
                    </li>
                    <li>
                        <button onClick={()=>setFilterState(false)}>Active</button>
                    </li>
                    <li>
                        <button onClick={()=>setFilterState(true)}>Completed</button>
                    </li>
                </ul>

                <button className="clear-completed"
                onClick={()=>{ 
                    
                    //setTask(todoLeft);

                    //console.log("tasks: " + JSON.stringify(tasks) );
                }}
                >
                    Clear completed
                </button>
            </footer>
      </section>
      {/* <span className="todo-count">
                    <strong>{tasks.length}</strong>
                     items left
                </span> */}
    </div>
  );
}

export default Home;
