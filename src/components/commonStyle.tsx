import styled from "styled-components";
import theme from "styled-theming";

interface ButtonProps {
  variant: any;
  color: string;
}
interface TextProps {
  color?: string;
  fontSize?: string;
}

interface WrapperProps {
  background?: string;
}

//SET INTERFACE FOR THEME

const backgroundButton = theme.variants("mode", "variant", {
  default: { light: "#ededed", dark: "#333" },
});
const backgroundTheme = theme("mode", {
  dark: "#6b6b6b",
  light: "#fff",
});

//END SET INTERFACE THEME

export const Button = styled("button")<ButtonProps>`
  background-color: ${backgroundButton};
  color: ${(props) => (props.color ? props.color : "blue")};
  border: "1px solid gray";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  display: block;
  &:hover {
    background-color: bisque;
  }
`;

// TEXT P,H1....H6, SPAN,B...
export const Text = styled("h1")<TextProps>`
  color: ${(props) => (props.color ? props.color : "#333")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
  font-weight: normal;
  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;

export const Wrapper = styled("div")<WrapperProps>`
  display: flex;
  background: ${backgroundTheme};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  border: 1px solid #333;
`;
