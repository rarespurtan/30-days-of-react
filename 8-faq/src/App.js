/** @format */

import "./App.css";
import Question from "./Question";
import data from "./data";
import { useState } from "react";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
