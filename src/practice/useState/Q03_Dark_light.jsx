import {useState} from 'react';


const DarkLightToggle = () => {

    const [dark,setDark] = useState(false);
      return(
        <div style ={{
             background: dark ? "#222" : "#fff",
             color: dark ? "#fff" : "#222",
             padding: "30px"
        }}>
         <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
         <button onClick={() =>setDark(prev => !prev)}>
            Toggle Theme
         </button>
        </div>
      );
}

export default DarkLightToggle;