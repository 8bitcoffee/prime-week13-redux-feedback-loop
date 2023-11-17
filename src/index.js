import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

const feedback = (state = {}, action) => {
    if (action.type === "QUESTION_1"){
        console.log("Question one:", action.payload);
        return {...state, question1: action.payload};
    }
    else if (action.type === "QUESTION_2"){
        console.log("Question two:", action.payload);
        return {...state, question2: action.payload};
    }
    else if (action.type === "QUESTION_3"){
        console.log("Question three:", action.payload);
        return {...state, question3: action.payload};
    }
    else if (action.type === "QUESTION_4"){
        console.log("Question four:", action.payload);
        return {...state, question4: action.payload};
    }
    else if (action.type === "QUESTION_5"){
        console.log("Question five:", action.payload);
        return {...state, question5: action.payload};
    }
    else if (action.type === "SUBMIT"){
        return {};
    }
    return state;
}

const responses = (state = [], action) => {
    if (action.type === "GET_RESPONSES"){
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedback,
        responses
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