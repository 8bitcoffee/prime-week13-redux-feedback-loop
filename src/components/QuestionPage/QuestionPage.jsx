import React from 'react';
import './QuestionPage.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../Question/Question';

/**
 * Gets questions from the database and displays question component
 * @returns 
 */
function QuestionPage (){
    const dispatch = useDispatch();

    // Called on reload. Uses saga to get questions from database
    const getQuestions = () => {
        dispatch({type: "FETCH_QUESTIONS"})
    }

    useEffect(() => {
        getQuestions();
    }, []);

    const feedback = useSelector(store => store.feeback);
    const questions = useSelector(store => store.questions);
    const numQuestions = useSelector(store => store.numQuestions);
    const currentQuestion = useSelector(store => store.currentQuestion);

    if (currentQuestion == numQuestions){
        if (questions[currentQuestion-1].type == "rating"){
            return(
                <Question
                    circleColor={"#2196F3"}
                    circleFillPercent={Math.round((currentQuestion/(numQuestions+1))*100)}
                    lastQuestion ={true}
                    percentText={Math.round((currentQuestion/(numQuestions+1))*100)}
                    questionNumber={String(currentQuestion)}
                    questionText={questions[currentQuestion-1]["question"]}
                    required={questions[currentQuestion-1]["required"]}
                    subquestion1={"Let us know how you are on a rating of 1 to 10."}
                    subquestion2={"One is TERRIBLE. Ten is AMAZING!"}
                    type={"rating"}
                />
            )
        }
        else if (questions[currentQuestion-1].type == "text"){
            return(
                <Question
                    circleColor={"#2196F3"}
                    circleFillPercent={Math.round((currentQuestion/(numQuestions+1))*100)}
                    lastQuestion ={true}
                    percentText={Math.round((currentQuestion/(numQuestions+1))*100)}
                    questionNumber={String(currentQuestion)}
                    questionText={questions[currentQuestion-1]["question"]}
                    required={questions[currentQuestion-1]["required"]}
                    subquestion1={""}
                    subquestion2={""}
                    type={"text"}
                />
            )
        }
    }
    else if (currentQuestion == 1){
        if (questions[0].type == "rating"){
            return(
                <Question
                    circleColor={"darkgray"}
                    circleFillPercent={100}
                    lastQuestion ={false}
                    percentText={0}
                    questionNumber={String(currentQuestion)}
                    questionText={questions[0]["question"]}
                    required={questions[0]["required"]}
                    subquestion1={"Let us know how you are on a rating of 1 to 10."}
                    subquestion2={"One is TERRIBLE. Ten is AMAZING!"}
                    type={"rating"}
                />
            )
        }
        else if (questions[0].type == "text"){
            return(
                <Question
                    circleColor={"darkgray"}
                    circleFillPercent={100}
                    lastQuestion ={false}
                    percentText={0}
                    questionNumber={String(currentQuestion)}
                    questionText={questions[0]["question"]}
                    required={questions[0]["required"]}
                    subquestion1={""}
                    subquestion2={""}
                    type={"text"}
                />
            )
        }
    }
    else if (questions[currentQuestion-1].type == "rating"){
        return(
            <Question
                circleColor={"#2196F3"}
                circleFillPercent={Math.round((currentQuestion/(numQuestions+1))*100)}
                lastQuestion ={false}
                percentText={Math.round((currentQuestion/(numQuestions+1))*100)}
                questionNumber={String(currentQuestion)}
                questionText={questions[currentQuestion-1]["question"]}
                required={questions[currentQuestion-1]["required"]}
                subquestion1={"Let us know how you are on a rating of 1 to 10."}
                subquestion2={"One is TERRIBLE. Ten is AMAZING!"}
                type={"rating"}
            />
        )
    }
    else if (questions[currentQuestion-1].type == "text"){
        return(
            <Question
                circleColor={"#2196F3"}
                circleFillPercent={Math.round((currentQuestion/(numQuestions+1))*100)}
                lastQuestion ={false}
                percentText={Math.round((currentQuestion/(numQuestions+1))*100)}
                questionNumber={String(currentQuestion)}
                questionText={questions[currentQuestion-1]["question"]}
                required={questions[currentQuestion-1]["required"]}
                subquestion1={""}
                subquestion2={""}
                type={"text"}
            />
        )
    }
    return(
        <></>
    )
}

export default QuestionPage;