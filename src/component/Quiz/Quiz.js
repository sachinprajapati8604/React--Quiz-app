import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../Question/Question";
import { useHistory } from 'react-router';
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

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
            <span className="subtitle">Welcome, {name}</span>

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