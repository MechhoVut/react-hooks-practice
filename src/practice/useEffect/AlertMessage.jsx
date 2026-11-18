import {useEffect} from 'react';

function AlertMessage(){
    useEffect(() =>{
        alert("Component loade successfully!");
    },[]);
    return <h2>Application loaded </h2>
}
export default AlertMessage;