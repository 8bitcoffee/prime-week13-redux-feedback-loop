import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Page5.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Page5(){
    const [comments, setComments] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: `QUESTION_5`,
            payload: {question: "Comments:", rating: comments}
        });
        setComments("");
        window.location.href = `/#/review`;
    }

    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress sx={{color: "#2196F3"}} variant="determinate" {...props} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" color="text.secondary">
                {`80%`}
              </Typography>
            </Box>
          </Box>
        );
    }
    return(
        <div>
            <Card sx={{maxwidth: 550}}>
                <CardContent>
                    <CircularProgressWithLabel value={80} />
                    <br></br>
                    <Typography gutterBottom variant="h5" component="div">
                        Any additional comments?
                    </Typography>
                    <br></br>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField
                            multiline
                            rows={8}
                            required={false}
                            value={comments}
                            type="text"
                            id="outlined-multiline-flexible"
                            label="Comments"
                            placeholder="Comments"
                            onChange={(e)=>setComments(e.target.value)}
                        />
                        <br></br>
                        <Button onClick={handleSubmit} variant="contained" id="submit-btn">Next</Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default Page5;