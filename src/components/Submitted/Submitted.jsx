import React from 'react';
import './Submitted.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Submitted(){
    let history = useHistory()

    return(
        <div>
            <h3>Woooo!!! You did it!</h3>
            <p>Here's a pic because you're one cool cat.</p>
            <img src='images/cool-cat.jpg'/>
            <p>If you want to submit more feedback, click here to start a new form.</p>
            <button onClick={()=>history.push('/')}>Submit more feedback!</button>
        </div>
    )
}

export default Submitted;