import { useState, useEffect } from 'react'

function Tasks({tasks}) {
    const[filterState,setFilterState]=useState('');
    const[allMarked,setAllMarked] = useState(false);
    const[isChecked,setIsChecked] = useState(false);
    const[taskList,setTasks]=useState(tasks);
    
    /* const filtered=tasks.filter((item)=>{
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase()
            .includes(filterState.toLowerCase())
        );
    }) */
    const todoDone = tasks.filter((item)=>item.done===true);
    const todoLeft = tasks.filter((item)=>item.done === false);
    

    useEffect(()=>{
        console.log(filterState !== '' ? filterState : 'all');
    },[tasks,allMarked])
            /* <select onChange={(e)=>setFilterState(e.target.value)}>
                <option defaultValue={filterState === 'all' ? 'all':filterState}>{filterState === 'all' ? 'all':filterState} *</option>
                <option defaultValue={filterState === 'active'} value={'active'}>active</option>
                <option defaultValue={filterState === true} value={true}>completed</option>
            </select> */
    return (
        <section className='main' hidden={tasks.length ===0}>
            <input property="toggleAll" id="toggle-all"
				 className="toggle-all" type="checkbox"
            onClick={(e)=>{
                //e.preventDefault();
                for(let k=0;k<tasks.length;k++){
                    if(k === tasks.length-1){
                        
                    }else{
                       tasks[k].done === tasks[k+1].done ? (tasks[k].done ? setAllMarked(false) : setAllMarked(true) ): setAllMarked('');
                    }
                    //if(tasks[k].done === tasks[k+1].done)
                }
                /* tasks.map((item,i)=>{
                    if(item.done === false){
                        item.done 
                    }
                }) */
                if(!allMarked){
                   tasks.map((item,i)=>{
                    if(item.done === false){
                        item.done = true;
                        /* var inputs = document.getElementsByClassName('toggle');
                        for(let i=0;i<inputs.length;i++){
                            //inputs.item(i).toggleAttribute('checked',false)
                            console.log(inputs.item(i));
                        } */
                    }
                    
                }) 
                }else{
                    tasks.map((item,i)=>{
                        if(item.done === true){
                            item.done = false;
                            /* var inputs = document.getElementsByClassName('toggle');
                            for(let i=0;i<inputs.length;i++){
                                //inputs.item(i).toggleAttribute('checked',false)
                                console.log(inputs.item(i));
                            } */
                        }
                    })
                }
                setAllMarked(!allMarked);
                //console.log(tasks);
            }}
            />{/* no action on event */}
            <label for="toggle-all">
                Mark all as complete
            </label>
            <ul className='todo-list'>
                {
                    tasks.map((item,index)=>(
                        <li key={index} className={allMarked === true? 'completed':""}>
                            <div className='view'>
                                <input className='toggle' type="checkbox" id={"toggle-"+index} /* checked={item.done} */
                                    /* defaultChecked={item.done} */ style={{width:"10%",marginLeft:"-17rem"}} 
                                    onChange={(e)=>{
                                        item.done = e.target.checked === true ? true : false;
                                    }}
                                    />
                                <label>{item.task}</label>
                                <button className="destroy" onClick={(e)=>{/* e.preventDefault();tasks.splice(index,1);console.log(filtered) */}}></button>
                            </div>
                        </li>
                    ))
                }

            </ul>
            
            {/* <footer className="footer">

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
                        if(tasks[i].done === true){
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
            </footer> */}
        </section>
    )
    /* const [tasks,setTask] = useState([
        {
            task: "Learn Javascript",
            done: "completed"
        },
        {
            task: "Learn React",
            done: "active"
        },
        {
            task: "Have a Life",
            done: "active"
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
