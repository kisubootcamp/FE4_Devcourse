import { twMerge } from "tailwind-merge";
export default function App() {
  return (
    <>
      <h1 className={twMerge("text-3xl font-bold underline")}>Hello world!</h1>
    </>
  );
}
