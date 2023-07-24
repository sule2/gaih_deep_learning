import { useState, useEffect } from 'react'

function Tasks({tasks}) {
    const[filterState,setFilterState]=useState('');
    const[newState,setNewState] = useState('');
    const[taskList,setTasks]=useState(tasks);
    
    const filtered=tasks.filter((item)=>{
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase()
            .includes(filterState.toLowerCase())
        );
    })
    

    useEffect(()=>{
        console.log(filterState !== null ? filterState : 'all');
    },[tasks])
            /* <select onChange={(e)=>setFilterState(e.target.value)}>
                <option defaultValue={filterState === 'all' ? 'all':filterState}>{filterState === 'all' ? 'all':filterState} *</option>
                <option defaultValue={filterState === 'active'} value={'active'}>active</option>
                <option defaultValue={filterState === 'completed'} value={'completed'}>completed</option>
            </select> */
    return (
        <section className='main'>
            <input class="toggle-all" type="checkbox" />{/* no action on event */}
            <label for="toggle-all">
                Mark all as complete
            </label>
            <ul className='todo-list'>
                {
                    filtered.map((item,index)=>(
                        <li key={index} className={item.state === 'completed'? 'completed':""}>
                            <div className='view'>
                                <input className='toggle' type="checkbox" 
                                    defaultChecked={item.state === 'completed'? true : false} style={{width:"10%",marginLeft:"-17rem"}} 
                                    onChange={(e)=>{console.log('checkbox change')}}
                                    />
                                <label>{item.task}</label>
                                <button className="destroy" onClick={()=>{tasks.splice(index,1);console.log(filtered)}}></button>
                            </div>
                        </li>
                    ))
                }

            </ul>
            <footer className="footer">
                {/* <span className="todo-count">
                    <strong>{tasks.length}</strong>
                    items left
                </span> */}

                <ul className="filters">
                    <li>
                        <button onClick={()=>setFilterState("")}>All</button>
                    </li>
                    <li>
                        <button onClick={()=>setFilterState("active")}>Active</button>
                    </li>
                    <li>
                        <button onClick={()=>setFilterState("completed")}>Completed</button>
                    </li>
                </ul>

                <button className="clear-completed"
                onClick={()=>{
                    let count = tasks.length;
                    for(let i=0;i<count;i++){
                        if(tasks[i].state === 'completed'){
                          tasks.splice(i,0);
                          console.log(tasks[i]) 
                        }
                        console.log(tasks[i])
                    }
                    console.log(tasks);
                }}
                >
                    Clear completed
                </button>
            </footer>
        </section>
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
