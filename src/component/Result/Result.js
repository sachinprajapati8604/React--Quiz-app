import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import './Result.css'
export default function Result({ name, score ,category}) {
    const history = useHistory();
    useEffect(() => {
        if (!name) {
            history.push("/");
        }
    }, [name, history]);

    return (
        <div className="result">
            <h1 className="result-heading">{name}'s result </h1>
            <div className="result-info">
            <span className="res-title" >Final Score: <b>{score}</b>/ 10</span>
            <br />
            <span className="accuracy" > Accuracy: <strong>{(score/10)*100}</strong> % </span>
            </div>
         

            
            <Button
                variant="outlined"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 30 }}
                href="/"
            >
                Go To Home Page
            </Button>
        </div>
    )
}
