import { useState } from "react";

function WelcomeBack(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
              <h2>{isLoggedIn ? "Welcome back":"Please Login"}
              </h2>
              <button onClick={() => setIsLoggedIn(prev =>!prev)}>
                {isLoggedIn ? "Logout" : "Login"}
              </button>
        </div>
    );
}

export default WelcomeBack;