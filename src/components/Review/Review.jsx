import React from 'react';
import { useState } from 'react';
import './Review.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function Review(props){
    let history = useHistory();
    const feedback = useSelector(store => store.feedback);
    const [newFeedback, setNewFeedback] = useState([
        {question: "How are you feeling today?",rating: ""},
        {question: "How well are you understanding the content?",rating: ""},
        {question: "How well are you being supported?",rating: ""},
        {question: "How well are you going to grade this assignment?",rating: ""},
        {question: "Comments:",rating: ""}
    ]);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/feedback',feedback).then((response) =>{
            console.log("Feedback submitted.", feedback);
            props.getResponses();
            dispatch({
                type: `SUBMIT`,
            })
            history.push(`/submitted`);
        })
        .catch((error) => {
            console.error("Error in POST to '/feedback'.", error);
            alert("Error in POST to '/feedback'. See console");
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch({
            type: "UPDATE_FEEDBACK",
            payload: newFeedback
        });
        setNewFeedback([
            {question: "How are you feeling today?",rating: ""},
            {question: "How well are you understanding the content?",rating: ""},
            {question: "How well are you being supported?",rating: ""},
            {question: "How well are you going to grade this assignment?",rating: ""},
            {question: "Comments:",rating: ""}
        ]);
    }

    const handleChange = (index, rating)=>{
        let newArray = [...newFeedback];
        newArray[index]["rating"] = rating;
        console.log(newArray);
        setNewFeedback(newArray);
    }

    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress sx={{color: "#5cb85c"}} variant="determinate" {...props} />
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
                {`100%`}
              </Typography>
            </Box>
          </Box>
        );
    }
    return(
        <div>
            <Card sx={{maxwidth: 550}}>
                <CardContent>
                    <CircularProgressWithLabel value={100} />
                    <br></br>
                    <Typography gutterBottom variant="h4" component="div">
                        Your Responses:
                    </Typography>
                    <br></br>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{fontWeight:"bold",textDecoration:"underline"}} align="center">Question</TableCell>
                                    <TableCell sx={{fontWeight:"bold",textDecoration:"underline"}} align="center">Rating</TableCell>
                                    <TableCell sx={{minWidth:200,fontWeight:"bold",textDecoration:"underline"}} align="center">New Rating</TableCell>
                                    <TableCell sx={{fontWeight:"bold",textDecoration:"underline"}} align="center">Update</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {feedback.map((response, index) => 
                                    <TableRow key={index}>
                                        <TableCell align="left">{response.question}</TableCell>
                                        <TableCell align="center">{response.rating}</TableCell>
                                        <TableCell align="center">
                                           {response.type == "text" ?
                                                <TextField
                                                    multiline
                                                    rows ={8}
                                                    required={false}
                                                    value={newFeedback[index].rating}
                                                    type="text"
                                                    id="outlined"
                                                    label="Comments"
                                                    placeholder="Comments"
                                                    onChange={(e)=>handleChange(index, e.target.value)}
                                                /> :
                                                <TextField
                                                    required={false}
                                                    value={newFeedback[index].rating}
                                                    type="number"
                                                    id="outlined-required"
                                                    label="1-10"
                                                    placeholder="1-10"
                                                    onChange={(e)=>handleChange(index, Number(e.target.value))}
                                                />}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button onClick={handleUpdate} variant="contained" id="update-btn">Update Rating</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                        <br></br>
                        <Button onClick={handleSubmit} variant="contained" id="submit-btn">Submit</Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default Review;