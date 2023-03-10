import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meaning, lightMode }) => {
  return (
    <div className="meanings">
      {meaning[0] && word && category === "en" && (
        <audio
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            width: "100%",
          }}
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          controls
        >
          {" "}
          Your Browser does not support audio
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a Word</span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <strong
                key={index}
                className="singleMeaning"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "black",
                  color: lightMode ? "white" : "#b5d6e7",
                }}
              >
                <div>{def.definition}</div>
                <hr style={{ backgroundColor: "black", width: "100%" }} />

                {def.example && (
                  <span>
                    <b>Example: {def.example}</b>
                  </span>
                )}
                {def.synonyms && (
                  <span>Synonyms: {def.synonyms.map((s) => `${s},`)}</span>
                )}
              </strong>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
