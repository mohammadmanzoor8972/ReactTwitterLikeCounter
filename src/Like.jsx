import React from "react";
import styled from "styled-components";

const Styled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin: 10px;
  padding: 10px;
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

export default withStyledComponent(Like);

function withStyledComponent(Component) {
  return () => {
    return (
      <Styled>
        <Component />
      </Styled>
    );
  };
}
