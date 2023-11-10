import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Page5 from '../Page5/Page5';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Page1</Link></li>
            <li><Link to='/2'>Page2</Link></li>
            <li><Link to='/3'>Page3</Link></li>
            <li><Link to='/4'>Page4</Link></li>
            <li><Link to='/5'>Page5</Link></li>
            <li><Link to='/review'>Review</Link></li>
            <li><Link to='/submitted'>Submitted</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
          </ul>
        </nav>
        <Route exact path='/'><Page1/></Route>
        <Route exact path='/2'><Page2/></Route>
        <Route exact path='/3'><Page3/></Route>
        <Route exact path='/4'><Page4/></Route>
        <Route exact path='/5'><Page5/></Route>
        <Route exact path='/review'><Review/></Route>
        <Route exact path='/submitted'><Submitted/></Route>
        <Route exact path='/admin'><Admin/></Route>
      </Router>
    </div>
  );
}

export default App;