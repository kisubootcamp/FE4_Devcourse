// 조건부 렌더링
// 조건문을 활용하여 컴포넌트를 렌더링하는 기법
// 1. if
// 2. 삼항 연산자
// 3. 논리 &&
// 3.1 expr1 && expr2 -> true
// 3.2 expr1 && expr2 -> false

// 반복 렌더링
// 반복문을 활용하여 반복 렌더링을 수행
// map 함수를 활용하여 반복 렌더링을 수행

import Sustagram from "./components/Sustagram";
import Button from "./html/Button";
import Input from "./html/Input";

export default function App() {
  return (
    <>
      <Sustagram />
      <hr />
      <div className="item-middle ">
        <Button type="button" className="bg-[#4f4f4f]">
          Add
        </Button>
        <Button type="button" className="bg-[#ed4848]">
          Cancel
        </Button>
        <Button type="button" className="bg-[#7D48ED]">
          Success
        </Button>
        <Input
          className="input-style"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          className="input-style"
          placeholder="Enter your password"
          type="password"
        />
      </div>
    </>
  );
}
