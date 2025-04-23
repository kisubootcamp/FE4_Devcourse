import { useReducer, useState } from "react";
import { counterReducer, CounterActionType } from "../reducer/counter.reducer";

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    dispatch({ type: CounterActionType.INCREMENT, payload: step });
  };

  const handleDecrement = () => {
    dispatch({ type: CounterActionType.DECREMENT, payload: step });
  };

  const handleReset = () => {
    dispatch({ type: CounterActionType.RESET });
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-blue-600">{count}</span>
      </div>

      <div className="flex justify-center space-x-2">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={handleDecrement}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={handleIncrement}
        >
          Increase
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="text-sm text-gray-600">Step:</span>
        <select
          className="border rounded px-2 py-1"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
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
