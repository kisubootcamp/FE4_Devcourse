import { useReducer } from "react";

function counterReducer(
  state: { value: number },
  action: { type: string },
  stepValue: number
) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + stepValue };
    case "DECREMENT":
      return { value: state.value - stepValue };
    case "RESET":
      return { value: 0 };
    default:
      return state;
  }
}

function stepReducer(state: { value: number }, action: { step: number }) {
  switch (action.step) {
    case 1:
    case 5:
    case 10:
    case 100:
      return { value: action.step };
    default:
      return state;
  }
}

export default function Counter() {
  const [step, dispatchStep] = useReducer(stepReducer, { value: 1 });
  const [count, dispatchCount] = useReducer(
    (state: { value: number }, action: { type: string }) =>
      counterReducer(state, action, step.value),
    { value: 0 }
  );

  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-blue-600">{count.value}</span>
      </div>

      <div className="flex justify-center space-x-2">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={() => dispatchCount({ type: "DECREMENT" })}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          onClick={() => dispatchCount({ type: "RESET" })}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={() => dispatchCount({ type: "INCREMENT" })}
        >
          Increase
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="text-sm text-gray-600">Step:</span>
        <select
          className="border rounded px-2 py-1"
          value={step.value}
          onChange={(e) => dispatchStep({ step: Number(e.target.value) })}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
