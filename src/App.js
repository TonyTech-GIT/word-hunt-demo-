import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Headers from "./components/Headers/Headers";
import Definitions from "./components/Definitions/Definitions";

// Theme toggle imports...
import { Switch } from "@mui/material";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meaning);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#282c34" : "#fff",
        color: lightMode ? "white" : "black",
        transition: "all 0.3s linear",
      }}
    >
      <Container
        className="container"
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 15,
            paddingTop: 10,
          }}
        >
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <Switch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
            {...label}
            defaultChecked
          />
        </div>

        {/* <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label="MUI switch"
          />
        </FormGroup> */}

        <Headers
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          setMeaning={setMeaning}
          lightMode={lightMode}
        />

        {meaning && (
          <Definitions
            word={word}
            category={category}
            meaning={meaning}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
