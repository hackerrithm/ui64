import * as React from 'react';
// import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: Function;
  onDecrement?: () => void;
}

export const Hello: React.SFC<Props> = (props) => {
  // if (enthusiasmLevel <= 0) {
  //   throw new Error('You could be a little more enthusiastic. :D');
  // }

  const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = props
  return (
    <div className="hello">
      <div className="greeting">
      {enthusiasmLevel + 12}
        Hello {name + getExclamationMarks(enthusiasmLevel)} here 
      </div>
      <div>
        <button onClick={ ()=> {
          onDecrement
          console.log("skoot")
        }
        }>-</button>
        <button onClick={ () => {
          onIncrement
        }}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  console.log("called in getExclamationMarks dude")
  return Array(numChars + 1).join('!');
}
