import React from "react";
import { decode } from "he";
import { nanoid } from "nanoid";

export default function Question(props) {
  const quest = props.quest;

  const awnserElt = quest.dispArr.map((rep) => {
    const eltid = nanoid();
    return (
      <div className="answer" key={quest.id}>
        <input
          onClick={() => props.optionClick(rep, quest.id)}
          type="radio"
          name={`question--awnser ${quest.id}`}
          id={eltid}
        />
        <label htmlFor={eltid}>{decode(rep)}</label>
      </div>
    );
  });

  return (
    <div className="question">
      <h2 className="question--text">{quest.question}</h2>
      <div className="question--option">{awnserElt}</div>
    </div>
  );
}
