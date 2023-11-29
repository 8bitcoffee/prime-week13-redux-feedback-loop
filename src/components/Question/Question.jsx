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

/**
 * Displays a question, form for responding, and submit button.
 * If it is the last question, will forward to review page
 * @param {Object} props 
 * @returns 
 */
function Question(props){
    let history = useHistory(); // For forwarding to next page if needed
    const [rating, setRating] = useState(""); // Number from form if type is "rating"
    const [comments, setComments] = useState(""); // String from form if type is "text"
    const dispatch = useDispatch();
    
    /**
     * Form validation followed by storing responses in redux.
     * Sends to review page if on last question.
     * @param {Object} e // Event object
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.type == "rating"){
            if (Number(rating) > 0 && Number(rating) <= 10 && Number.isInteger(Number(rating))){
                let action = {
                    type: "ADD_FEEDBACK",
                    payload: {
                        question: props.questionText,
                        rating: Number(rating),
                        type: "rating"
                    }
                };
                dispatch(action);
                setRating("");
                if (props.lastQuestion == true){
                    history.push('/review');
                }
            }
            else {
                alert("Rating must be an integer 1-10");
            }
        }
        else if (props.type == "text"){
            let action = {
                type: "ADD_FEEDBACK",
                payload: {
                    question: props.questionText,
                    rating: comments,
                    type: "text"
                }
            };
            dispatch(action);
            setComments("");
            if (props.lastQuestion == true){
                history.push('/review');
            }
        }
    }

    /**
     * Circular progress bar with percent text in the center
     * @param {Object} cirprops 
     * @returns 
     */
    function CircularProgressWithLabel(cirprops) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress sx={{color: props.circleColor}} variant="determinate" {...cirprops} />
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
                {`${props.percentText}%`}
              </Typography>
            </Box>
          </Box>
        );
    }

    if (props.type == "rating"){
        return(
            <div>
                <Card id="question" sx={{maxwidth: 550}}>
                    <CardContent>
                        <CircularProgressWithLabel value={props.circleFillPercent} />
                        <br></br>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.questionText}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.subquestion1}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.subquestion2}
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
    else if (props.type == "text"){
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
}

export default Question;