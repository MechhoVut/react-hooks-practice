import {useState, useEffect } from 'react';

function BackgroundColor(){
    const [color,setColor] = useState('white');

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);
    return(
        <>
        <button onClick={() =>
            setColor(prev =>
                prev === "white" ? "lightblue" : "white"
            )
        }
        >
         change Background
        </button>
        </>
    );
}
export default BackgroundColor;