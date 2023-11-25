import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

const feedback = (state = [], action) => {
    if (action.type === "ADD_FEEDBACK"){
        return [...state, action.payload]
    }
    else if (action.type === "UPDATE_FEEDBACK"){
        let idx = 0;
        let retArray = []
        for (let response of action.payload){
            console.log(response);
            if (response.rating != ""){
                retArray.push(response);
            }
            else{
                retArray.push(state[idx]);
            }
            idx += 1;
        }
        return retArray;
    }
    else if (action.type === "SUBMIT"){
        return [];
    }
    return state;
}

const currentQuestion = (state = 1, action) => {
    if (action.type === "ADD_FEEDBACK"){
        return state + 1
    }
    else if (action.type === "SUBMIT"){
        return 1;
    }
    return state;
}

const responses = (state = [], action) => {
    if (action.type === "GET_RESPONSES"){
        return action.payload;
    }
    return state;
}

const questions = (state = [], action) => {
    if (action.type === "GET_QUESTIONS"){
        return action.payload;
    }
    return state;
}

const numQuestions = (state = 0, action) => {
    if (action.type === "GET_QUESTIONS"){
        return action.payload.length;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedback,
        responses,
        questions,
        numQuestions,
        currentQuestion
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);