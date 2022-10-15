import { ACTIONS } from "./App";

export default function DigitButton(props) {
  const { dispatch, digit } = props;
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
