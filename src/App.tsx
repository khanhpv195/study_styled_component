import "./App.css";
import { Button, Wrapper, Text } from "./components/Common.style";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState("");

  const theme = {
    background: background,
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Text fontSize="2em">Hello</Text>
      </Wrapper>
      <Button
        color="#333"
        border="1px solid red"
        onClick={() => setBackground("palevioletred")}
      >
        Change background div
      </Button>
    </ThemeProvider>
  );
}

export default App;
