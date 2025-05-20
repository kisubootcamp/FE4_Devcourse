import { useRef } from "react";

import UseState from "./components/hooks/basic/UseState";
import UseEffect from "./components/hooks/basic/UseEffect";
import Stopwatch from "./components/hooks/pratice/useEffect/StopWatcher";
import UseLayoutEffect from "./components/hooks/basic/UseLayoutEffect";
import UseId from "./components/hooks/basic/UseId";
import ReactMemo from "./components/hooks/basic/ReactMemo";
import UseMemo from "./components/hooks/basic/UseMemo";
import UseCallback from "./components/hooks/basic/UseCallback";
import UseDeferredValue from "./components/hooks/basic/UseDeferredValue";
import UseTransition from "./components/hooks/basic/UseTransition";

import UseStatePractice from "./components/hooks/pratice/useState/UseStatePractice";
import WithTransitionSearch from "./components/hooks/pratice/useTransition/WithTransitionSearch";

export default function App() {
    const display = useRef("WithTransitionSearch");
    return (
        <>
            {display.current === "UseState" && <UseState />}
            {display.current === "UseEffect" && <UseEffect />}
            {display.current === "Stopwatch" && <Stopwatch />}
            {display.current === "UseLayoutEffect" && <UseLayoutEffect />}
            {display.current === "UseId" && <UseId />}
            {display.current === "ReactMemo" && <ReactMemo />}
            {display.current === "UseMemo" && <UseMemo />}
            {display.current === "UseCallback" && <UseCallback />}
            {display.current === "UseDeferredValue" && <UseDeferredValue />}
            {display.current === "UseTransition" && <UseTransition />}

            {display.current === "UseStatePractice" && <UseStatePractice />}
            {display.current === "WithTransitionSearch" && (
                <WithTransitionSearch />
            )}
        </>
    );
}
