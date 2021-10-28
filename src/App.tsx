import "./App.css";
import { Button, Text, Wrapper } from "./components/commonStyle";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState("dark");

  return (
    <ThemeProvider theme={{ mode: background }}>
      <Wrapper>
        <Text fontSize="2em">Hello</Text>
      </Wrapper>
      <Button
        color="#ffffff"
        variant="default"
        onClick={() => setBackground("light")}
      >
        Background Light
      </Button>
      <Button
        color="#ffffff"
        variant="default"
        onClick={() => setBackground("dark")}
      >
        Background Dark
      </Button>
    </ThemeProvider>
  );
}

export default App;
