import React from "react";

export default function Start(props) {
  return (
    <div className="start">
      <h1 className="title">Quizy</h1>
      <h2 className="description">This is a quiz ! Good Luck !</h2>
      <button onClick={props.startClick} className="start--button">
        Start Quizz
      </button>
    </div>
  );
}
