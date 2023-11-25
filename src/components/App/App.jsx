import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import QuestionPage from '../QuestionPage/QuestionPage';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Admin from '../Admin/Admin';
import SetQuestions from '../SetQuestions/SetQuestions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  const getResponses = () =>{
    axios.get('/feedback').then((response) => {
      console.log(`GET from '/feedback`);
      dispatch({
        type: "GET_RESPONSES",
        payload: response.data
      })
    })
    .catch((error) => {
      console.error("Error in GET '/feedback'.", error);
      alert("Error in GET '/feedback'. See console.");
    })
  }

  const getQuestions = () => {
    axios.get('/questions').then((response) => {
      console.log("GET from '/questions'");
      dispatch({
        type: "GET_QUESTIONS",
        payload: response.data
      })
    })
    .catch((error) => {
      console.error("Error in GET '/questions'.", error);
      alert("Error in GET '/questions'. See console.");
    })
  }

  useEffect(()=>{
    getResponses();
    getQuestions();
  },[]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>QuestionPage</Link></li>
            <li><Link to='/review'>Review</Link></li>
            <li><Link to='/submitted'>Submitted</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/setquestions'>Set Questions</Link></li>
          </ul>
        </nav>
        <Route exact path='/'><QuestionPage/></Route>
        <Route exact path='/review'><Review getResponses={getResponses}/></Route>
        <Route exact path='/submitted'><Submitted/></Route>
        <Route exact path='/admin'><Admin getResponses={getResponses}/></Route>
        <Route exact path='/setquestions'><SetQuestions getQuestions={getQuestions}></SetQuestions></Route>
      </Router>
    </div>
  );
}

export default App;