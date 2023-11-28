import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SetQuestions (props){
    const questions = useSelector(store => store.questions);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAbbreviation, setNewAbbreviation] = useState("")
    const [newRequired, setNewRequired] = useState("");
    const [newType, setNewType] = useState("");

    const deleteQuestion = (id, abbreviation) => {
        axios.delete(`/questions/${id}`).then((response) => {
            console.log("DELETE '/questions")
            props.getQuestions();
        })
        .catch((error) => {
            console.error("Error in DELETE '/question'", error);
            alert("Something went wrong");
        })
        axios.delete(`/questions/abbrev/${abbreviation}`).then((response) => {
            console.log("DELETE '/questions")
            props.getQuestions();
        })
        .catch((error) => {
            console.error("Error in DELETE '/question'", error);
            alert("Something went wrong");
        })

    }

    const addQuestion = () => {
        let questionInfo = {
            question: newQuestion,
            abbreviation: newAbbreviation,
            required: newRequired,
            type: newType
        };
        axios.post('/questions', questionInfo).then((response) =>{
            console.log("POST to '/questions'");
            props.getQuestions();
        })
        .catch((error) => {
            console.error("Error in POST '/question'", error);
            alert("Something went wrong");
        })
    }

    return(
         <div>
            <Card sx={{maxwidth: 550}}>
                <CardContent>
                    <br></br>
                    <Typography gutterBottom variant="h4" component="div">
                        Current Questions:
                    </Typography>
                    <br></br>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Question</TableCell>
                                    <TableCell align="center">Abbreviation</TableCell>
                                    <TableCell align="center">Required?</TableCell>
                                    <TableCell align="center">Reponse type</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {questions.map((response) => 
                                    <TableRow key={response.id}>
                                        <TableCell align="left">{response.question}</TableCell>
                                        <TableCell align="center">{response.abbreviation}</TableCell>
                                        <TableCell align="center">{String(response.required)}</TableCell>
                                        <TableCell align="center">{response.type}</TableCell>
                                        <TableCell align="center">
                                            <Button onClick={()=>deleteQuestion(response.id,response.abbreviation)} variant="contained" id="update-btn">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br></br>
                    <Box type="form" component={Paper}>
                        <FormControl fullWidth>
                        <br></br>
                        <TextField
                            multiline
                            rows={3}
                            required={true}
                            value={newQuestion}
                            type="text"
                            id="outlined-required"
                            label="Question"
                            placeholder="Question"
                            onChange={(e)=>setNewQuestion(e.target.value)}
                            sx={{marginLeft:5,marginRight:5}}
                        />
                        </FormControl>
                        <FormControl fullWidth>
                        <br></br>
                        <TextField
                            required={true}
                            value={newAbbreviation}
                            type="text"
                            id="outlined-required"
                            label="Abbreviation"
                            placeholder="Abbreviation"
                            onChange={(e)=>setNewAbbreviation(e.target.value)}
                            sx={{marginLeft:5,marginRight:5}}
                        />
                        </FormControl>
                        <br></br>
                        <br></br>
                        {/* <InputLabel id="demo-simple-select-label">Required?</InputLabel> */}
                        <FormControl fullWidth>
                            <InputLabel 
                                id="demo-simple-select-label"
                                sx={{marginLeft:5,marginRight:50}}
                            >Required?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={newRequired}
                                label="Required?"
                                onChange={(e)=>setNewRequired(e.target.value)}
                                sx={{marginLeft:5,marginRight:50}}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <FormControl fullWidth>
                            <InputLabel 
                                id="demo-simple-select-label"
                                sx={{marginLeft:5,marginRight:50}}
                            >Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={newType}
                                label="Type"
                                onChange={(e)=>setNewType(e.target.value)}
                                sx={{marginLeft:5,marginRight:50}}
                            >
                                <MenuItem value={"rating"}>Rating</MenuItem>
                                <MenuItem value={"text"}>Text</MenuItem>
                            </Select>
                            <br></br>
                        <Button onClick={addQuestion} variant="contained" id="submit-btn">Submit</Button>
                        <br></br>
                        </FormControl>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default SetQuestions;