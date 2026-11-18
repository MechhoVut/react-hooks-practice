import { useState } from "react";

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(e){
        e.preventDefault();

        if (!email.includes ("@")){
            setError("Enter a valid mail");
            return;
        }
         if (password.length < 8) {
            setError("Password must contain 8 characters");
            return;
        }
         setError("");
        alert("Login successful!");
    }  

    return(
        <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />

      {error && <p>{error}</p>}

      <button type="submit">Login</button>
    </form>
    );
}
export default LoginForm;