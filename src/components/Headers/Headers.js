import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Headers.css";
import categories from "../../data/category";

const Headers = ({
  category,
  setCategory,
  word,
  setWord,
  setMeaning,
  lightMode,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#fff" : "#000",
      },
      mode: lightMode ? "dark" : "light",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
    setMeaning([]);
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Search a Word"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <TextField
            className="select"
            id="standard-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            variant="standard"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Headers;
