import classNames from "classnames";
import Caret from "./Caret";

interface Props {
  userInput: string;
  className: string;
  testText: string;
}

export default function TestTextBox({ userInput, className, testText }: Props) {
  const characters = userInput.split("");

  return (
    <div className={className}>
      {characters.map((char, index) => {
        return (
          <Character
            key={`${char}-${index}`}
            expected={testText[index]}
            actual={char}
          />
        );
      })}
        <Caret />
    </div>
  )
}

function Character({ expected, actual }: { expected: string, actual: string }) {
  const isCorrect = expected === actual;
  const isWhitespace = expected === " ";
  const isIncorrect = !isCorrect && actual !== "";

  return (
    <span className={classNames({
      "text-red-500": isIncorrect && !isWhitespace,
      "text-primary-400": !isIncorrect && !isWhitespace,
      "bg-red-500/50": isIncorrect && isWhitespace,
      "bg-primary-400/50": !isIncorrect && isWhitespace,
    })}>
      {expected}
    </span>
  )
}