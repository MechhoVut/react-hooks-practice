import {createContext,useContext} from 'react';

const userContext = createContext();

function App(){
    const user = {
        name: "Chandan",
        age: 22,
    };
    return(
        <userContext.Provider value={user}>
           <Profile/>
        </userContext.Provider>
    );
    function Profile(){
        const user = useContext(userContext);
        return (
            <>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </>
        )
    }
}
export default App;