import React from 'react';
import './Page1.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Page1(){
    return(
        <div>
            <Card sx={{maxwidth: 550}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        How are you feeling today?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Let us know how you are on a rating of 1 to 10.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        One is the WAY down in the dumps. Ten is AMAZING!
                    </Typography>
                    <br></br>
                    <Box component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField
                            
                            id="outlined-required"
                            label="*Required"
                            defaultValue="1-5"/>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default Page1;