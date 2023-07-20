import { useState } from 'react'

function Tasks({tasks}) {
    const[filterState,setFilterState]=useState('all');
    
    const filtered=tasks.filter((item)=>{
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase()
            .includes(filterState.toLowerCase())
        );
    })

    /* useEffect(()=>{
        console.log(filterState);
    },[filtered,filterState]) */
            /* <select onChange={(e)=>setFilterState(e.target.value)}>
                <option defaultValue={filterState === 'all' ? 'all':filterState}>{filterState === 'all' ? 'all':filterState} *</option>
                <option defaultValue={filterState === 'active'} value={'active'}>active</option>
                <option defaultValue={filterState === 'completed'} value={'completed'}>completed</option>
            </select> */
    return (
        <div>
            <ul className='todo-list'>
                {
                    filtered.map((item,index)=>(
                        <li key={index} className="completed">
                            <div className='view'>
                                <input className='toggle' type="checkbox" defaultChecked={item.state === 'active'} /* onChange={item.state = 'completed'} *//>
                                <label>{item.task}</label>
                                {/* <button className='destroy' onClick={tasks.splice(index,1)}></button> */}
                            </div>
                        </li>
                    ))
                }

            </ul>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{filtered.length}</strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <button onClick={setFilterState("all")}>All</button>
                        {/* <a href="#/" class="selected">All</a> */}
                    </li>
                    <li>
                        <button onClick={setFilterState("active")}>Active</button>
                        {/* <a href="#/">Active</a> */}
                    </li>
                    <li>
                        <button onClick={setFilterState("completed")}>Completed</button>
                        {/* <a href="#/">Completed</a> */}
                    </li>
                </ul>

                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </div>
    )
    /* const [tasks,setTask] = useState([
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
    ) */
}

export default Tasks;
