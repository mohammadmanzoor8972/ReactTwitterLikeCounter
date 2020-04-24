import React from "react";
import styled, { withTheme, ThemeProvider } from "styled-components";

const Styled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin: 10px;
  padding: 10px;
`;

const Popup = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  width: 100px;
  height: 30px;
  left: ${props => props.theme.x + "px"};
  top: ${props => props.theme.y + "px"};
  position: absolute;
  border: 1px solid grey;
`;

const Like = () => {
  const [counter, setCounter] = React.useState(() => {
    return 0;
  });
  const [counterD, setCounterD] = React.useState(() => {
    return 0;
  });
  return (
    <>
      Like
      <button
        onClick={() => {
          setCounter(counter + 1);
          if (counter % 10 === 0) {
            setCounterD(counter);
          }
        }}
      >
        ♥ {counterD}
      </button>
    </>
  );
};

//export default withStyledComponent(Like);
function withStyledComponent(Component) {
  return () => {
    return (
      <Styled>
        <Component />
      </Styled>
    );
  };
}

export default withTooltipComponent(Like);

function withTooltipComponent(Component) {
  return () => {
    const [flag, setFlag] = React.useState(() => false);
    const [pos, setPos] = React.useState(() => ({ x: 0, y: 0 }));
    const Popups = () => <Popup>Hello</Popup>;
    return (
      <div
        onMouseOver={() => {
          setPos({ x: event.clientX, y: event.clientY });
          setFlag(true);
        }}
        onMouseOut={() => {
          setPos({ x: event.clientX, y: event.clientY });
          setFlag(false);
        }}
      >
        {flag && (
          <ThemeProvider theme={pos}>
            <Popups />
          </ThemeProvider>
        )}
        <Component />
      </div>
    );
  };
}
