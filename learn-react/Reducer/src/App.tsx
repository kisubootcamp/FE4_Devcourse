import { useState } from "react";
import Counter from "./components/Counter";
import StringList from "./components/StringList";
import Todo from "./components/Todo";
import AsyncTest from "./components/AsyncTest";
export default function App() {
  const [tab, setTab] = useState<"counter" | "stringList" | "todo" | "async">(
    "counter"
  );
  return (
    <>
      <div>
        <button onClick={() => setTab("counter")}>Counter</button>
        <button onClick={() => setTab("stringList")}>StringList</button>
        <button onClick={() => setTab("todo")}>Todo</button>
        <button onClick={() => setTab("async")}>Async</button>
      </div>
      {tab === "counter" && <Counter />}
      {tab === "stringList" && <StringList />}
      {tab === "todo" && <Todo />}
      {tab === "async" && <AsyncTest />}
    </>
  );
}
