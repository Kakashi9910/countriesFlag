import React, { useState } from "react";

const Dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const DictionaryApp = () => {
  const [textValue, setValue] = useState("");
  const [description, setDescription] = useState("");
  let wordExist = false;
  const handleClick = () => {
    Dictionary.forEach((data) => {
      console.log(data.word, textValue);
      if (data.word.toLowerCase() == textValue.toLowerCase()) {
        setDescription(data.meaning);
        wordExist = true;
      }
    });
    if (!wordExist) {
      setDescription("Word not found in the dictionary.");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search for a word..."
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <div>
        <h3>Definition:</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default DictionaryApp;
