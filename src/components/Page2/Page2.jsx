import React from 'react';
import './Page2.css';
import Question from '../Question/Question';

function Page2(){

    return(
        <>
            <Question
                circleColor={"#2196F3"}
                circleFillPercent={20}
                percentText={20}
                questionText={"How well are you understanding the content?"}
                questionNumber={"2"}
            />
        </>
    )
}

export default Page2;