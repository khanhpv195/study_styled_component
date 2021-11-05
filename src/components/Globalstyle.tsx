import { createGlobalStyle } from "styled-components";
import theme from "styled-theming";
import styled from "styled-components";

type ThemeType = {
  body: string;
  text_color: string;
};
export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text_color};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
// TEXT P,H1....H6, SPAN,B...
export const Text = styled("h1")<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.text_color};
  font-size: 24px;
  font-weight: normal;
`;
export const Container = styled("div")<{ theme: ThemeType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
`;
