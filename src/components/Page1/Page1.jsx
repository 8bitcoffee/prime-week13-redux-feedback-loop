import React from 'react';
import './Page1.css';
import Question from '../Question/Question';

function Page1(){
    return(
        <>
            <Question
                circleColor={"darkgray"}
                circleFillPercent={100}
                percentText={0}
                questionText={"How are you feeling today?"}
                questionNumber={1}
            />
        </>
    )
}

export default Page1;