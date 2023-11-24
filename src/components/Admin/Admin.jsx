import React from 'react';
import './Admin.css';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Flag } from '@mui/icons-material';


function Admin(props){
    const responses = useSelector(store => store.responses);
    
    const handleSubmit = (id) => {
        axios.delete(`/feedback/${id}`).then((response) =>{
            console.log("Feedback deleted.", responses);
            props.getResponses();
        })
        .catch((error) => {
            console.error("Error in DELETE '/feedback/:id'", error);
            alert("Error in DELETE '/feedback/:id'. See console");

        })
    }

    const toggleFlag = (id) => {
        axios.put(`/feedback/${id}`).then((response) =>{
            console.log("Flag toggled.", responses);
            props.getResponses();
        })
        .catch((error) => {
            console.error("Error in PUT '/feedback/:id'", error);
            alert("Error in PUT '/feedback/:id'. See console");
        })
    }

    return(
        <div>
            <Card sx={{maxwidth: "90vw"}}>
                <CardContent>
                    <br></br>
                    <Typography gutterBottom variant="h4" component="div">
                        Responses:
                    </Typography>
                    <br></br>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Flag</TableCell>
                                    <TableCell align="center">Toggle Flag</TableCell>
                                    <TableCell align="center">Feeling</TableCell>
                                    <TableCell align="center">Understanding</TableCell>
                                    <TableCell align="center">Support</TableCell>
                                    <TableCell align="center">Grade</TableCell>
                                    <TableCell align="center">Comments</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {responses.map((response, index) => {
                                    if (response.flagged == true){
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align="center">
                                                    <Flag sx={{color:"red"}}id="flag-icon"/>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button variant="contained" onClick={()=>toggleFlag(response.id)}>Toggle Flag</Button>
                                                </TableCell>
                                                <TableCell align="center">{response.feeling}</TableCell>
                                                <TableCell align="center">{response.understanding}</TableCell>
                                                <TableCell align="center">{response.support}</TableCell>
                                                <TableCell align="center">{response.grade}</TableCell>
                                                <TableCell align="left">{response.comments}</TableCell>
                                                <TableCell align="center">
                                                    <Button onClick={()=>handleSubmit(response.id)} variant="contained" id="submit-btn">Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                    else {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align="center">
                                                    <Flag sx={{color:"green"}}id="flag-icon"/>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button variant="contained" onClick={()=>toggleFlag(response.id)}>Toggle Flag</Button>
                                                </TableCell>
                                                <TableCell align="center">{response.feeling}</TableCell>
                                                <TableCell align="center">{response.understanding}</TableCell>
                                                <TableCell align="center">{response.support}</TableCell>
                                                <TableCell align="center">{response.grade}</TableCell>
                                                <TableCell align="left">{response.comments}</TableCell>
                                                <TableCell align="center">
                                                    <Button onClick={()=>handleSubmit(response.id)} variant="contained" id="submit-btn">Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default Admin;