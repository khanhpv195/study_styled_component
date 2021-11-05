import React, { useEffect } from "react";
import { GlobalStyles, Text, Container } from "../components/Globalstyle";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { lightTheme, darkTheme } from "../components/Themes";
import Toggle from "../components/Toggler";

const Home = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing Quisquam
          distinctio velit eveniet, quo in corrupti enim ea nemo laudantium unde
          doloribus quis aperiam. Inventore eaque tempore hic sint, cum
          molestiae.
        </Text>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
