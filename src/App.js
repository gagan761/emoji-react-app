import { useState } from "react";
 import "./style.css";

export default function App() {
  var obj = {
   
    "😃": ["Grinning face with big eyes"],
    "😂": ["Laughing"],
    "🤐": ["Zipper-Mouth Face"],
    "🤑": ["Money-Mouth Face"],
    "🙄": ["Face with Rolling Eyes"],
    "🔥 ": [" yellow flickering flame"]
  };

  var objkey = Object.keys(obj);

  const [state, setState] = useState([]);

  function emojiInputHandler(event) {
    var output = obj[event.target.value];
    if (output) setState(output);
    else setState(["Not found"]);

    if (event.target.value === "") setState([]);
  }
  function emojiClickHandler(item) {
    setState(obj[item]);
  }

  return (
    <div className="App" >
      <h1> Emoji descriptor</h1>
      <input onChange={emojiInputHandler} />
      {state.map((desc) => {
        return <h2> {desc}</h2>;
      })}

      <br/>

      {objkey.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            key={item}
            style={{ cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
