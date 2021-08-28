import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Quiz from './component/Quiz/Quiz';
import Result from './component/Result/Result';
import React, { useState } from 'react'
import axios from 'axios';


function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
