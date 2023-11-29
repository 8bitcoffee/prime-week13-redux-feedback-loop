import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import QuestionPage from '../QuestionPage/QuestionPage';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Admin from '../Admin/Admin';
import SetQuestions from '../SetQuestions/SetQuestions';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  /**
   * responses are the historical responses saved in the database
   */
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

  // On (re)load, loads responses. Did have questions there as well, but moved the questions to a saga.
  useEffect(()=>{
    getResponses();
  },[]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        {/* Nav was used for development*/}
        {/* <nav>
          <ul>
            <li><Link to='/'>QuestionPage</Link></li>
            <li><Link to='/review'>Review</Link></li>
            <li><Link to='/submitted'>Submitted</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/setquestions'>Set Questions</Link></li>
          </ul>
        </nav> */}
        <Route exact path='/'><QuestionPage/></Route> {/* Page where all the questions spawn */}
        <Route exact path='/review'><Review getResponses={getResponses}/></Route> {/* Page to review answers before submitting */}
        <Route exact path='/submitted'><Submitted/></Route> {/* Confirmation of submission */}
        <Route exact path='/admin'><Admin getResponses={getResponses}/></Route> {/* Page to view the historical responses and flag feedback*/}
        <Route exact path='/setquestions'><SetQuestions/></Route> {/* Abandoned form for changing the questions on the database. Maybe revisit after we're done with SQL join lectures */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;