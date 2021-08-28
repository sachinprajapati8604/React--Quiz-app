import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import './Result.css'
export default function Result({ name, score }) {
    const history = useHistory();
    useEffect(() => {
        if (!name) {
            history.push("/");
        }
    }, [name, history]);

    return (
        <div className="result">
            <span className="title" >Final Score: {score}</span>

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
