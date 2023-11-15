import React from 'react';
import './Page4.css';
import Question from '../Question/Question';

function Page4(){
    return(
        <>
            <Question
                circleColor={"#2196F3"}
                circleFillPercent={60}
                percentText={60}
                questionText={"How well are you going to grade this assignment?"}
                questionNumber={"4"}
            />
        </>
    )
}

export default Page4;