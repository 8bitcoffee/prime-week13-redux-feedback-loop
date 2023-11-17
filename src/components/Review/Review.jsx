import React from 'react';
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
import Paper from '@mui/material/Paper';
import axios from 'axios';

function Review(props){
    let history = useHistory();
    const feedback = useSelector(store => store.feedback);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        console.log(feedback[0]["rating"]);
        axios.post('/feedback',feedback).then((response) =>{
            console.log("Feedback submitted.", feedback);
            props.getResponses();
        })
        dispatch({
            type: `SUBMIT`,
        });
        history.push(`/submitted`);
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
                                <TableRow>
                                    <TableCell align="left">Question</TableCell>
                                    <TableCell align="right">Rating</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {feedback.map((response, index) => 
                                    <TableRow key={index}>
                                        <TableCell align="left">{response.question}</TableCell>
                                        <TableCell align="right">{response.rating}</TableCell>
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