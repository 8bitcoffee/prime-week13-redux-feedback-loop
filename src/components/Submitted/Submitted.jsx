import React from 'react';
import './Submitted.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Submitted(){
    let history = useHistory()

    return(
        <div>
            <h3>Woooo!!! You did it!</h3>
            <h6>Here's a pic because you're one cool cat.</h6>
            <img src='images/cool-cat.jpg'/>
            <h6>If you want to submit more feedback,</h6>
            <h6>click here to start a new form.</h6>
            <button onClick={()=>history.push('/')}>Submit more feedback!</button>
        </div>
    )
}

export default Submitted;