import {useState} from 'react';

function Subscribe(){
    const [subscribed, setSubscribed] = useState(false);
    return(
        <div>
            <button onClick={() => setSubscribed(prev => !prev)}>
                {subscribed ? "Subscribed" : "Subscribe"}

            </button>
        </div>
    );
}
export default Subscribe;