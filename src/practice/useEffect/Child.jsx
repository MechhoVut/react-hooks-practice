import { useState, useEffect } from "react";

function Child() {

    useEffect(() => {
        console.log("Child Mounted");

        return () => {
            console.log("Child Unmounted");
        };
    }, []);

    return <h2>Hello from Child!</h2>;
}

function App() {

    const [show, setShow] = useState(true);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                Toggle Component
            </button>

            {show && <Child />}
        </>
    );
}

export default App;