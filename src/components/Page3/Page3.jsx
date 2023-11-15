import React from 'react';
import './Page3.css';
import Question from '../Question/Question';

function Page3(){
    return(
        <>
            <Question
                circleColor={"#2196F3"}
                circleFillPercent={40}
                percentText={40}
                questionText={"How well are you being supported?"}
                questionNumber={"3"}
            />
        </>
    )
}

export default Page3;