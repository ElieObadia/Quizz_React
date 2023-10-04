import React from "react";
import { decode } from "he";

export default function Awnser(props) {
  const quest = props.quest;
  const awnserElt = quest.dispArr.map((rep) => {
    return (
      <div className="answer" key={quest.id}>
        <label
          data-selected={quest.selected === rep ? "selected" : null}
          data-right={quest.correct_answer === rep ? "right" : null}
        >
          {decode(rep)}
        </label>
      </div>
    );
  });

  return (
    <div className="awnser">
      <h2 className="awnser--text">{quest.question}</h2>
      <div className="awnser--option">{awnserElt}</div>
    </div>
  );
}
