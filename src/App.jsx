import Q01_Counter from "./practice/useState/Q01_Counter";
import Q02_Show_hide_pass from "./practice/useState/Q02_Show_hide_pass";
import Q03_Dark_light from "./practice/useState/Q03_Dark_light";
import Subscribe from "./practice/useState/Subscribe";
import WelcomeBack from "./practice/useState/WelcomeBack";
import LoginForm from "./practice/useState/LoginForm";
import QuantityManager from "./practice/useState/QuantityManager";
import Mounted from "./practice/useEffect/Mounted";
import ComponentRendered from "./practice/useEffect/ComponentRendered";
import BackgroundColor from "./practice/useEffect/BackgroundColor";
import AlertMessage from "./practice/useEffect/AlertMessage";
import Child from "./practice/useEffect/Child";
import Containing from "./practice/useContext/Containing";

function App(){
  return(
       <div>
         <h2>React Hooks Practice</h2>
         <Q01_Counter/>
         <Q02_Show_hide_pass/>
         <Q03_Dark_light/>
         <Subscribe/>
         <WelcomeBack/>
         <LoginForm/>
         <QuantityManager/>
         <Mounted/>
         <ComponentRendered/>
         <BackgroundColor/>
         <AlertMessage/>
         <Child/>
         <Containing/>
       </div>
  );
}
export default App;