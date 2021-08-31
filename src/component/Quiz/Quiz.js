import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../Question/Question";
import { useHistory } from 'react-router';
import "./Quiz.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import swal from 'sweetalert';


const Quiz = ({ name, questions, score, setScore }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    // funtion for time up
    let onTimesup = () => {
        swal("Time's up!",`Your score is ${score} out of 10`);
        history.push("/");
    }

    const history = useHistory();
    useEffect(() => {
        if (!name) {
            history.push("/");
        }
    }, [name, history]);

    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [currQues, questions]);

    // console.log(questions);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="quiz">
           
           <div className="userDetail">
           <span className="subtitle">Welcome, {name}</span>
           
           <CountDownTimer 
               onTimesup={onTimesup}
               duration={5* 60}
           />
           </div>
          
        
            {questions ? (
                <>
                    <div className="quizInfo">
                        <span className="topic">Topic: {questions[currQues].category}</span>
                        <span className="score">
                            {/* {questions[currQues].difficulty} */}
                            Score : {score}
                        </span>
                    </div>
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                    />
                </>
            ) : (
                <CircularProgress
                    style={{ margin: 100 }}
                    color="inherit"
                    size={150}
                    thickness={1}
                />
            )}
        </div>
    );
};

export default Quiz;