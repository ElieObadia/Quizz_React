import React from "react";
import Question from "./Question";
import Awnser from "./Awnser";

export default function Forms(props) {
  const [ansData, SetAnsData] = React.useState(props.data);
  const [questions, setQuestions] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

  function optionClick(rep, id) {
    SetAnsData((prev) => {
      return prev.map((quest) => {
        if (quest.id === id && quest.correct_answer === rep) {
          return {
            ...quest,
            isSelected: true,
            dispArr: quest.dispArr,
            isRight: true,
            selected: rep,
          };
        } else if (quest.id === id) {
          return {
            ...quest,
            isSelected: true,
            dispArr: quest.dispArr,
            isRight: false,
            selected: rep,
          };
        } else {
          return quest;
        }
      });
    });
  }

  React.useEffect(
    () =>
      setQuestions(
        props.data.map((quest) => {
          return (
            <Question key={quest.id} quest={quest} optionClick={optionClick} />
          );
        })
      ),
    []
  );

  const [awnser, setAwnser] = React.useState([]);

  function resultCalc() {
    console.log(ansData);
    if (!isChecked) {
      setIsChecked(true);
      setAwnser(
        ansData.map((quest) => {
          return <Awnser key={quest.id} quest={quest} />;
        })
      );
    } else {
      props.resetHandle();
    }
  }

  return (
    <div className="forms">
      <h1 className="text--title">Questions</h1>
      <hr />
      {isChecked ? awnser : questions}
      <br />
      <br />
      {isChecked && (
        <h2>
          You have{" "}
          {ansData.filter((item) => item.isSelected && item.isRight).length} / 5
          good awnser
        </h2>
      )}
      <button onClick={resultCalc} className="submitAwnser">
        {isChecked ? "Play Again" : "Check Awnser"}
      </button>
    </div>
  );
}
