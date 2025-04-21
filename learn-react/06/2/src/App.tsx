// useRef 훅
// -값이 변경되도 디랜더링이 발생하지 않는 변수(리 랜더링이 발생해도 값이 유지)
// -JSX 요소를 참조하는 경우

import { useRef, useState } from "react";

// 컴포넌트가 다시 그려진다? (리-랜더링)
// 함수가 다시 실행된다는 것.
// export default function App() {
//   // let cnt = 0-> 리랜더링 되면 초기화 되기 때문에 아무리 클릭해도 카운트 되지 않는다.
//   const cnt = useRef(0);
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     cnt.current += 1;
//     setCount((count) => count + Math.floor(Math.random() * 10) + 1);
//   };

//   const printConsole = () => {
//     console.log(`지금까지 ${cnt.current}번 클릭됨`);
//   };
//   return (
//     <>
//       <h1 className="text-3xl underline">count : {count}</h1>
//       <button onClick={increment}>증가</button>
//       <button onClick={printConsole}>몇번 눌렀는지 출력하기</button>
//     </>
//   );
// }

// useRef
// 값의 유지는 필요하되, 리렌더링이 발생하지 않는 변수가 필요할 때
// JSX 요소에 대한 참조가 필요할 때
export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const isSubmitting = useRef(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;
    if (!email) {
      alert("이메일을 입력해주세요");
      emailRef.current?.focus();
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요");
      pwRef.current?.focus();
      return;
    }
    isSubmitting.current = true;
    console.log("로그인됨");
    setTimeout(() => {
      isSubmitting.current = false;
    }, 2000);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={pwRef}
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
