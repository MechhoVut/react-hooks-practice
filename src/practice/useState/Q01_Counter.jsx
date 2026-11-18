import { useState } from 'react';

function Counter(){
     const [ count, setCount] = useState(0);


    return(
         <div>
            <h2>Count:{count} </h2>
            <button onClick={() => setCount(count + 1)}>
                Increament
            </button>

             <button onClick={ () => setCount(Math.max(0,count-1))}> 
                 Decreament
             </button>

             <button onClick={() => setCount(0)}>
                Reset
             </button>
         </div>
    );
}

export default Counter;