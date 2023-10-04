import React from "react";
import Forms from "./components/Forms";
import Start from "./components/Start";
import { decode } from "he";
import { nanoid } from "nanoid";

function App() {
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const [isStarted, setIsStarted] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [resetKey, setResetKey] = React.useState(0);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        const dataWithId = data.results.map((quest) => ({
          ...quest,
          question: decode(quest.question),
          id: nanoid(),
          isSelected: false,
          isRight: false,
          dispArr: shuffleArray([
            ...quest.incorrect_answers,
            quest.correct_answer,
          ]),
          selected: "",
        }));
        setData(dataWithId);
      });
  }, [resetKey]);

  function startClick() {
    setIsStarted((prev) => !prev);
  }

  function resetHandle() {
    console.log("in reset");
    setResetKey((prevKey) => prevKey + 1);
  }

  return (
    <div className="App">
      {isStarted ? (
        <Forms key={resetKey} data={data} resetHandle={resetHandle} />
      ) : (
        <Start startClick={startClick} />
      )}
    </div>
  );
}

export default App;
