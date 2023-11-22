import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

const feedback = (state = [{},{},{},{},{}], action) => {
    if (action.type === "QUESTION_1"){
        console.log("Question one:", action.payload);
        return state.with(0,action.payload);
    }
    else if (action.type === "QUESTION_2"){
        console.log("Question two:", action.payload);
        return state.with(1,action.payload);
    }
    else if (action.type === "QUESTION_3"){
        console.log("Question three:", action.payload);
        return state.with(2,action.payload);
    }
    else if (action.type === "QUESTION_4"){
        console.log("Question four:", action.payload);
        return state.with(3,action.payload);
    }
    else if (action.type === "QUESTION_5"){
        console.log("Question five:", action.payload);
        return state.with(4,action.payload);
    }
    else if (action.type === "SUBMIT"){
        return [{},{},{},{},{}];
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