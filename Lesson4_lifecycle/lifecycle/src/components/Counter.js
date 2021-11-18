import {useState,useEffect} from "react";

function Counter() {
    const [number,setNumber] = useState(0);

    useEffect(() => {
        console.log("Component mount edildi.");
        const interval = setInterval(() => {
            setNumber((n) =>n + 1)
        },1000);
        return () => clearInterval(interval);
    },[]);//dependency array is empty it'll catch the mounting moment

  
    useEffect(() => {
        console.log("Number state güncellendi.");//effect
    },[number]);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number+1)}>Click</button>
            <hr/>
        </div>
    )
}

export default Counter
