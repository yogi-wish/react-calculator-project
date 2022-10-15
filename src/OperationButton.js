import { ACTIONS } from "./App";

export default function DigitButton(props) {
  const { dispatch, operation } = props;
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
