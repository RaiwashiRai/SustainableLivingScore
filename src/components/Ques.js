import React, { useState } from "react";
import QuesFooter from "./QuesFooter";
import QuesHeader from "./QuesHeader";
import Points from "./Points";
import questions from "../data/questions";

export default function Ques() {
  let [qno, updateQno] = useState(0);
  let [quesData, updateQuesData] = useState(questions[qno].ques);

  function updateQues(x){
    if(qno + x >= 0 && qno + x <= questions.length){
      updateQuesData(questions[qno + x].ques);
      updateQno(qno + x);
    }
  }

  return (
    <div className="ques-container">
      <QuesHeader />
      <div className="ques">
        <h3 className="question-line">
          {quesData}
        </h3>
        <Points />
      </div>
      <QuesFooter onClick={updateQues} id={qno} />
    </div>
  );
}
