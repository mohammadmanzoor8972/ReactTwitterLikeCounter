import React from "react";

const Like = () => {
  const [counter, setCounter] = React.useState(() => {
    return 0;
  });
  const [counterD, setCounterD] = React.useState(() => {
    return 0;
  });
  return (
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
  );
};

export default Like;
