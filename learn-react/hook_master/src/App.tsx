import UseState from "./components/hooks/basic/UseState";
import UseStatePractice from "./components/hooks/pratice/useState/UseStatePractice";

import ReactMemo from "./components/hooks/basic/ReactMemo";
import UseCallback from "./components/hooks/basic/UseCallback";
import UseDeferredValue from "./components/hooks/basic/UseDeferredValue";
import UseLayoutEffect from "./components/hooks/basic/UseLayoutEffect";
import UseMemo from "./components/hooks/basic/UseMemo";
import UseTransition from "./components/hooks/basic/UseTransition";
import Stopwatch from "./components/hooks/pratice/useEffect/StopWatcher";
import ScrollComparison from "./components/hooks/pratice/useLayoutEffect/ScrollComparison";
import UseReducerPracticer from "./components/hooks/pratice/useReducer/UseReducerPractice";
import WithTransitionSearch from "./components/hooks/pratice/useTransition/WithTransitionSearch";
import Todo from "./components/todos/memoization/Todo";

export default function App() {
  return (
    <>
      {/* <UseState /> */}
      {/* <UseStatePractice></UseStatePractice> */}
      {/* 과제 - UseReducerPracticer */}
      {/* <UseReducerPracticer></UseReducerPracticer> */}
      {/* <Stopwatch></Stopwatch> */}
      {/* <UseLayoutEffect></UseLayoutEffect> */}
      <ScrollComparison></ScrollComparison>
      {/* <ReactMemo></ReactMemo> */}
      {/* <UseCallback></UseCallback> */}
      {/* <UseMemo></UseMemo> */}
      {/* <Todo></Todo> */}
      {/* <UseDeferredValue></UseDeferredValue> */}
      {/* <UseTransition></UseTransition> */}
      {/* <WithTransitionSearch></WithTransitionSearch> */}
    </>
  );
}
