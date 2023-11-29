import React from 'react';
import './Submitted.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/**
 * Submit confirmation screen. Option to submit more sends back to home
 * as well as resets reducers logging feedback
 * @returns 
 */
function Submitted(){
    let history = useHistory()

    return(
        <Card id="submit-card" component={Paper}>
            <Typography gutterBottom variant='h3'>Woooo!!! You did it!</Typography>
            <p>Here's a pic because you're one cool cat.</p>
            <img src='images/cool-cat.jpg'/>
            <p>If you want to submit more feedback, click here to start a new form.</p>
            <Button variant="contained" onClick={()=>history.push('/')}>Submit more feedback!</Button>
        </Card>
    )
}

export default Submitted;