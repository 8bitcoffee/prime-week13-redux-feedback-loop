import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Question.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Question(topProps){
    let history = useHistory();
    const [rating, setRating] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(rating) > 0 && Number(rating) <= 10 && Number.isInteger(Number(rating))){
            dispatch({
                type: `QUESTION_${topProps.questionNumber}`,
                payload: {question: topProps.questionText, rating: Number(rating)}
            });
            setRating("");
            history.push(`/${Number(topProps.questionNumber) + 1}`)
        }
        else {
            alert("Rating must be an integer 1-10");
        }
    }

    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress sx={{color: topProps.circleColor}} variant="determinate" {...props} />
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
                {`${topProps.percentText}%`}
              </Typography>
            </Box>
          </Box>
        );
    }
    return(
        <div>
            <Card sx={{maxwidth: 550}}>
                <CardContent>
                    <CircularProgressWithLabel value={topProps.circleFillPercent} />
                    <br></br>
                    <Typography gutterBottom variant="h5" component="div">
                        {topProps.questionText}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Let us know how you are on a rating of 1 to 10.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        One is TERRIBLE. Ten is AMAZING!
                    </Typography>
                    <br></br>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField
                            required={true}
                            value={rating}
                            type="number"
                            id="outlined-required"
                            label="*Required"
                            placeholder="1-10"
                            onChange={(e)=>setRating(e.target.value)}
                        />
                        <br></br>
                        <Button onClick={handleSubmit} variant="contained" id="submit-btn">Next</Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default Question;