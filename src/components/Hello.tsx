import * as React from "react";
import "./Hello.css";

export interface IProps {
  name?: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const getExclamationMarks = (numChars: number) => {
  return Array(numChars + 1).join("!");
};

const Hello = ({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement
}: IProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("MORE");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <button className="button button--action-increment" onClick={onIncrement}>
        +
      </button>
      <button className="button button--action-decrement" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Hello;
