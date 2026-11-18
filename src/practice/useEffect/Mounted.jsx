import { useEffect } from "react";

function Mount(){
    useEffect(() => {
        console.log("Component Mounted");
    },[]);
    return(
       <h2> Welcome to react </h2>
    );
}
export default Mount;