import { useState } from "react";
import Count from "./components/Count";
import ChangeName from "./components/ChangeName";
import Input from "./components/Input";
import Select from "./components/Select";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";

export default function App() {
    const [count, setCount] = useState<number>(0);
    // useState는 컴포넌트 안에서만 독립적이다.

    const subCount = () => {
        setCount((count) => count - 1);
    };
    const clearCount = () => {
        setCount(0);
    };
    const addCount = () => {
        setCount((count) => count + 1);
    };

    return (
        <>
            <Count
                count={count}
                subCount={subCount}
                clearCount={clearCount}
                addCount={addCount}
            />
            <ChangeName />
            <Input />
            <Select />
            <UseRef />
            <UseRef2 />
        </>
    );
}
