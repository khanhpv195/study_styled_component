import styled from "styled-components";
interface ButtonProps {
  backgroundButton?: string;
  color: string;
  border?: string;
}
interface TextProps {
  color?: string;
  fontSize?: string;
}
interface WrapperProps {
  background?: string;
}

export const Button = styled("button")<ButtonProps>`
  background-color: ${(props) =>
    props.theme.backgroundButton ? props.theme.backgroundButton : "2b2b2b"};
  color: ${(props) => (props.color ? props.color : "blue")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${(props: any) => (props.border ? props.border : "1px solid white")};
  display: block;
  &:hover {
    background-color: bisque;
  }
`;

// TEXT P,H1....H6, SPAN,B...
export const Text = styled("h1")<TextProps>`
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
  font-weight: normal;
  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;
export const Wrapper = styled("div")<WrapperProps>`
  display: flex;
  background: ${(props) =>
    props.theme.background ? props.theme.background : "#056d6d"};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
`;
