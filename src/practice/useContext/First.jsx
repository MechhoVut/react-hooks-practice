import {createContext,useContext} from "react";

const userContext = createContext();

function App(){
    return(
        <userContext.provider value="chandan">
            <Profile/>
        </userContext.provider>
    );

    function Profile(){
        const user = useContext(userContext);
        return <h2>welcome {user}</h2>
    }
}

export default App;