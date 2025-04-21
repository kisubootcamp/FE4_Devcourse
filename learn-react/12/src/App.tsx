// import { useRef, useState } from "react";

import { useRef, useState } from "react";

// // useRef 훅
// // 1. 값이 변경되도 리렌더링이 발생하지 않는 변수 (리렌더링이 발생해도 값이 유지)
// // 2. JSX 요소를 참조하는 경우

// // 컴포넌트가 다시 그려진다? (리렌더링)
// // 함수가 다시 실행 된다는것.

// export default function App() {
//   const [count, setCount] = useState(0);
//   const cnt = useRef(0);
//   const increment = () => {
//     cnt.current += 1;
//     setCount((count) => count + Math.floor(Math.random() * 10) + 1);
//   };

//   const printConsole = () => {
//     // 몇 번 클릭했는지 콘솔로 출력
//     console.log(cnt);
//   };

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button
//         className="bg-blue-500 text-white p-2 rounded-md"
//         onClick={increment}
//       >
//         Click me
//       </button>
//       <button
//         className="bg-red-500 text-white p-2 rounded-md"
//         onClick={printConsole}
//       >
//         count increment
//       </button>
//     </>
//   );
// }

// useRef 값은 변경이 되지만 컴포넌트를 리렌더링 하지 않아도 될때.
// 예시) 버튼 클릭 시 버튼 잠금 처리 disabled 처리 또는 값에 따라 그냥 return 처리
// JSX 요소를 참조하는 경우
// 예시) 폼 요소에 포커스 처리

export default function App() {
  const isSubmitting = useRef(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting.current) return;

    if (email === "") {
      alert("이메일을 입력해주세요.");
      emailRef.current?.focus();
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      passwordRef.current?.focus();
      return;
    }

    isSubmitting.current = true;

    // 2초정도 걸리는 작업이라
    console.log("로그인됨");
    setTimeout(() => (isSubmitting.current = false), 2000);
  };
  return (
    <>
      <div>App Component</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
