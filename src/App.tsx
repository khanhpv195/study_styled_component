import "./App.css";
import { Button, Wrapper, Text } from "./components/Styled";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState("");

  const theme = {
    background: background ? background : "papayawhip",
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button
          background="#1166c1"
          color="#ffffff"
          border="1px solid red"
          onClick={() => setBackground("palevioletred")}
        >
          Change background
        </Button>
        <Text fontSize="2em">Hello</Text>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
