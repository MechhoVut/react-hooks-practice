import {useEffect, useState} from 'react';

function RenderCounter(){
    const [count,setCount] = useState(0);
    
    useEffect(() =>{
        console.log("Component Rendered");
    });
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count +1)}>
                Increament
            </button>
        </div>
    );
}
export default RenderCounter;